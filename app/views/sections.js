define(['jquery', 'backbone',  'templates', 'highcharts', 'views/schedule', 'collections/oscar', 'models/grades', "views/error"],
function($,        Backbone,    templates,   Highcharts,   ScheduleView,     OscarCollection,     GradesModel   ,  ErrorView   ) {
  var SectionsView = Backbone.View.extend({
    el : '.site-content',
    oscarData : '.oscar-data',
    events : {
    },
    initialize : function(models, options) {
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
    render : function() {
      this.$el.html(templates["sections/wrapper"]({department : this.department, course : this.course,semester : this.semester, year : this.year}));
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
            var currModel = that.oscar.models[i].toJSON();
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
            output.append(templates["sections/section"](context));
          }
          that.isOscarRendered = true;
        },
        error : function(r, s) {
          //TODO - Better Error Handling
          (new ErrorView()).render("Error: \n" + JSON.stringify(s));
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
          $('.'+crn + '.seatInfo').html(templates["sections/seats"](seatInfo.models[0].toJSON()));
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
          $('.class-statistics.gpa.average').html(templates["sections/averageGpa"](that.grades.toJSON()));
        }
        for(var i = 0; i < that.oscar.length; ++i) {
          that.getSeatInfo(that.oscar.models[i].get('crn'));
          renderGrade(that.oscar.models[i].toJSON());
        }
      }
      function renderGrade(oscarmodel) {
        var prof = oscarmodel.prof;
        var profId = that.getProfId(prof);

        var allGrades = that.grades.get('profs');
        if(typeof allGrades !== 'undefined' && typeof allGrades[profId] !== 'undefined') {
          var statistics = allGrades[profId].statistics;
          var years = allGrades[profId].years;
          $('#'+profId+'-historical-grades').removeClass('hide');
          $('.'+profId+'.gpa.average').html(templates["sections/averageGpa"](allGrades[profId]));
        }
      }
    },
    getProfId : function(profName) {
      return profName.replace(/\s|\,/g,'').toUpperCase();
    }
  });
  return SectionsView;

});