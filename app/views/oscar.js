define(['jquery', 'backbone',  'handlebars', 'highcharts', 'views/schedule', 'collections/oscar', 'collections/grades'],
function($,        Backbone,    Handlebars,   Highcharts,   ScheduleView,     OscarCollection,     GradesCollection) {
  var OscarView = Backbone.View.extend({
    el : '.site-content',
    oscarData : '.oscar-data',
    events : {
    },
    initialize : function(models, options) {
      this.loadTemplates();
      this.createCollections(options);

      this.year = options.year;
      this.semester = options.semester;
      this.department = options.department;
      this.course = options.course;

      this.title = this.semester.toCapital() + " " + this.year +": " + this.department + " " + this.course;
    },
    createCollections : function(options) {
      this.oscar = new OscarCollection([] , options);
      this.grades = new GradesCollection([], options);
    },
    remove : function() {
      this.scheduleView.remove();
      this.$el.empty();
      this.stopListening();
      return this;
    },
    //TODO - Remove this once pre-cache of templates done
    loadTemplates : function() {
      templates.oscar = {};

      if(typeof templates.oscar.main === 'undefined') {
        templates.oscar.main = Handlebars.compile(document.getElementById('template/oscar/main').innerHTML);
      }
      if(typeof templates.oscar.section === 'undefined') {
        templates.oscar.section = Handlebars.compile(document.getElementById('template/oscar/section').innerHTML);
      }
      if(typeof templates.oscar.seatInfo === 'undefined') {
        templates.oscar.seatInfo = Handlebars.compile(document.getElementById('template/oscar/seatInfo').innerHTML);
      }
      if(typeof templates.oscar.gpaAverage === 'undefined') {
        templates.oscar.gpaAverage = Handlebars.compile(document.getElementById('template/oscar/gpaAverage').innerHTML);
      }
      if(typeof templates.oscar.gpaPercentages === 'undefined') {
        templates.oscar.gpaPercentages = Handlebars.compile(document.getElementById('template/oscar/gpaPercentages').innerHTML);
      }
    },
    render : function() {
      this.$el.html(templates.oscar.main({title: this.title }));
      /* Schedule attached to right */
      this.scheduleView = new ScheduleView();
      /* Render Wrapper/main */
      this.scheduleView.render();
      /* Render Oscar Data */
      this.isOscarRendered = false;
      this.getAndRenderOscarCollection();
      /* Render Graphs */
      this.getAndRenderGradeGraphs();
    },
    isOscarRendered: false,
    checkInterval : null,
    oscarModels : null,
    getAndRenderOscarCollection : function() {
      var that = this;
      var output = $(that.oscarData);
      this.oscar.fetch({
        success : function(oscarModels) {
          that.oscarModels = oscarModels;
          output.html('');
          /* 
            Change data from list of sections, to a prof->section hierarchy
          */
          var profsTeaching = [];
          for(var i =0; i < oscarModels.length; ++i) {
            var currModel = oscarModels.models[i].attributes;
            if(typeof profsTeaching[currModel.prof] === 'undefined') {
              profsTeaching[currModel.prof] = [];
            }
            profsTeaching[currModel.prof].push(currModel);
          }
          for(var prof in profsTeaching) {
            /* 
              appending each iteration causes a frame redraw, as the seat
              info is also loaded async.  This is to avoid race conditions
            */
            var context = {
              year: that.year, semester: that.semester, department: that.department,
              course: that.course, prof: prof, profId: that.getProfId(prof),
              sections: profsTeaching[prof]
            };
            output.append(templates.oscar.section(context));
          }
          that.isOscarRendered = true;
        },
        error : function(r, s) {
          //TODO - Better Error Handling
          clearInterval(that.checkInterval);
          alert('Error: \n' + JSON.stringify(s));
          return false;
        }
      });
    },
    getSeatInfo : function(crn) {
      var options = {
        year: this.year,
        semester : this.semester,
        department : this.department,
        course : this.course,
        crn : crn
      };
      var that = this;
      (new OscarCollection([], options)).fetch({
        success : function(seatInfo) {
          $('.'+crn + '.seatInfo').html(templates.oscar.seatInfo(seatInfo.models[0].attributes));
        },
        error : function(r, s) {
          //TODO - Better Error Hanling
          alert("404, could not get seat information");
        }
      });

    },
    gradeModels : null,
    getAndRenderGradeGraphs : function() {
      var that = this;
      /*
        Get data ASYNC. the interval checks every 10ms to see if oscar data
        has been successfully renedred.  This is cause the 'graphs' are attached
        to the department/course/sections.
      */
      this.grades.fetch({
        success : function(gradeModels) {
          that.checkInterval = setInterval(function() {
            if(that.isOscarRendered) {
              clearInterval(that.checkInterval);
              that.gradeModels = gradeModels.models[0];
              for(var i = 0; i < that.oscarModels.length; ++i) {
                renderGrade(that.oscarModels.models[i].attributes);
                that.getSeatInfo(that.oscarModels.models[i].attributes.crn);
              }
            }
          }, 10);
        },
        error : function(r, s) {
          clearInterval(that.checkInterval);
          alert('Error: \n' + JSON.stringify(s));
        }
      });

      function renderGrade(oscarmodel) {
        var prof = oscarmodel.prof;
        var profId = that.getProfId(prof);
        var profGrades = that.gradeModels.attributes.profs[profId];
        if(profGrades) {
          var statistics = profGrades.statistics;
          var years = profGrades.years;
          $('#'+profId+'-historical-grades').removeClass('hide');
          $('.'+profId+'.gpa.average').html(templates.oscar.gpaAverage(profGrades));
        }
      }
    },
    getProfId : function(profName) {
      return profName.replace(/\s|\,/g,'').toUpperCase();
    }
  });
  return OscarView;

});