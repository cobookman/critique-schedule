define(['jquery', 'backbone',  'handlebars', 'highcharts', 'views/schedule', 'collections/oscar', 'models/grades'],
function($,        Backbone,    Handlebars,   Highcharts,   ScheduleView,     OscarCollection,     GradesModel) {
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
      this.grades = new GradesModel([], options);
      this.oscar.bind('sync', this.renderGrades, this);
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
      this.$el.html(templates.oscar.main({department : this.department, course : this.course,semester : this.semester, year : this.year}));
      /* Schedule attached to right */
      this.scheduleView = new ScheduleView();
      /* Render Wrapper/main */
      this.scheduleView.render();
      /* Render oscar data first, then  grades get rendered afterwords on change event */
      this.renderOscarCollection();
    },
    isOscarRendered : false,
    renderOscarCollection : function() {
      this.isOscarRendered = false;
      var that = this;
      var output = $(that.oscarData);
      this.oscar.fetch({
        success : function() {
          output.html('');
          /* 
            Change data from list of sections, to a prof->section hierarchy
          */
          var profsTeaching = [];
          for(var i =0; i < that.oscar.length; ++i) {
            var currModel = that.oscar.models[i].attributes;
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
              year: that.year,
              semester: that.semester.toCapital(),
              department: that.department.toCapital(),
              course: that.course.toCapital(),
              prof: prof.toCapital(),
              profId: that.getProfId(prof),
              sections: profsTeaching[prof]
            };
            output.append(templates.oscar.section(context));
          }
          that.isOscarRendered = true;
        },
        error : function(r, s) {
          //TODO - Better Error Handling
          alert('Error: \n' + JSON.stringify(s));
          return false;
        }
      });
    },
    getSeatInfo : function(crn) {
      var options = {
        year: this.year,
        semester : this.semester.toCapital(),
        department : this.department.toCapital(),
        course : this.course.toCapital(),
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
    renderGrades : function() {
      var that = this;
      /*
        Race Condition here!! (hence the interval);
        if oscar's rendering takes a while, and 'success'
        is triggered, the grade data would have no-where to
        render
      */
      this.grades.fetch({
        success : function() {
          var interval = setInterval(function() {
            if(that.isOscarRendered) {
              clearInterval(interval);
              goAndRenderGrades();
            }
          }, 25);
        },
        error : function(r, s) {
          alert('Error: \n' + JSON.stringify(s));
        }
      });

      function goAndRenderGrades() {
        if(that.grades.attributes.hasOwnProperty('statistics')) {
          $('.class-statistics.gpa.average').html(templates.oscar.gpaAverage(that.grades.toJSON()));
        }
        for(var i = 0; i < that.oscar.length; ++i) {
          that.getSeatInfo(that.oscar.models[i].attributes.crn);
          renderGrade(that.oscar.models[i].attributes);
        }
      }
      function renderGrade(oscarmodel) {
        var prof = oscarmodel.prof;
        var profId = that.getProfId(prof);
        var profGrades = that.grades.attributes.profs[profId];
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