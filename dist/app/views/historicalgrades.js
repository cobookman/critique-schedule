define(['jquery', 'templates', 'backbone', 'models/grades', 'highcharts', 'libraries/yearSemesterSort', 'views/error'],
function($,        templates,   Backbone,   GradesModel,     Highcharts ,  yearSemesterSort           ,  ErrorView) {
  var HistoricalGradesView = Backbone.View.extend({
    el : '.site-content',
    graphEl : '.graphs-content',
    events : {
      
    },
    initialize : function(models, options) {
      if(typeof models.user === 'undefined' || typeof options.department === 'undefined') {
        (new ErrorView()).render('user and department are required params');
      }
      this.user = models.user;
      this.department = options.department;
      this.course = false;
      this.profId = false;
      if(typeof options.course !== 'undefined') {
        this.course = options.course;
      }
      if(typeof options.profId !== 'undefined') {
        this.profId = options.profId;
      }
      this.grades = new GradesModel([], options);
    },
    remove : function() {
      this.$el.empty();
      this.stopListening();
      return this;
    },
    render : function() {
      var that = this;
      this.grades.fetch({
        success : function() {
          var context = {
            profId : that.profId,
            course : that.course.toCapital(),
            department : that.department.toCapital(),
            user : that.user.toJSON(),
            grades : that.grades.toJSON(),
          };
          if(that.grades.attributes.hasOwnProperty('name')) {
            context.prof = that.grades.get('name');
          }
          var output = templates["grades/wrapper"](context);
          that.$el.html(output);
          that.showData();
        },
        failure : function(r,s) {
          (new ErrorView()).render("No Grade Data found for: " + this.grades.url());
        }
      });
    },
    /* 
      Renders graphs and tables corr. to current active subnav
    */
    showData : function() {
      if(this.grades.attributes.hasOwnProperty('profs')) {
        this.showCourseData();
      } else if(this.grades.attributes.hasOwnProperty('name')) {
        this.showProfData();
      } else {
        $(this.graphEl).html("Improper API syntax :(");
        throw new Error("Improper grade API");
      }
    },
    showCourseData : function() {
      $('.grade-tables').append(templates["grades/table/wrapper"]({isMultipleProfs : true}));
      var profGrades = this.grades.get('profs');
      var context = {};
      var profIds = [];
      var profId;
      //2nd for loop needed for sorting purposes...yep inefficient but w/e
      for(profId in profGrades) {
        profIds.push(profId);
      }
      profIds = profIds.sort();
      //Generate each row's html
      var outputHTML = '';
      for(var i = 0, l = profIds.length; i < l; ++i) {
        profId = profIds[i];
        context = {
          profId : profId,
          department : this.department,
          course : this.course,
          name : profGrades[profId].name,
          statistics : profGrades[profId].statistics
        };
        outputHTML += templates["grades/table/row"](context);
      }
      $('.grade-tables table > tbody').append(outputHTML);
      this.renderGraph(this.grades.get('statistics'));
    },
    showProfData : function() {
      $('.grade-tables').append(templates["grades/table/wrapper"]({isMultipleProfs : false}));
      var context = {};
      //Generate each row's html
      var outputHTML = '';
      var years = this.grades.get('years');
      for(var year in years) {
        var semesters = years[year].semesters;
        for(var semester in semesters) {
          var sections = semesters[semester].sections;
          for(var section in sections) {
            context = {
              year : year,
              semester : semester.toCapital(),
              section : section,
              gpa : sections[section].gpa,
              A : sections[section].A,
              B : sections[section].B,
              C : sections[section].C,
              D : sections[section].D,
              F : sections[section].F,
              W : sections[section].W,
              size : sections[section].size.toCapital()
            };
            outputHTML += templates["grades/table/row"](context);
          }
        }
      }
      $('.grade-tables table > tbody').append(outputHTML);
      this.renderGraph(this.grades.get('statistics'));
    },
    changeTab : function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      var clicked = ev.target;
      if(clicked.parentElement.className.indexOf('active') < 0) {
        this.$el.find('.graphs > .tabs > dd.active').removeClass('active');
        clicked.parentElement.className += " active";
        this.renderGraph(clicked.getAttribute('href').replace('#',''));
      }
    },
    renderGraph : function(graphData, type) {
      this.chart = new Highcharts.Chart({
        chart: {
          renderTo: 'grade-graphs',
          type: 'column',
        },
        title: {
          text: null
        },
        xAxis : {
          categories : ['A%','B%','C%','D%','F%','W%']
        },
        yAxis : {
          min : 0,
          title : {
            text: null
          },
          gridLineWidth: 0,
          minorGridLineWidth: 0
        },
        plotOptions : {
          column : {
            dataLabels: {
              enabled: true,
            }
          }
        },
        legend:{
          enabled : false
        },
        tooltip : {
          useHTML : true,
          formatter : function() {
            return this.x + ": " + this.y;
          }
        },
        series : [{
          name : "Grade Distribution",
          data : [
            {
              y:  parseFloat(graphData.A),
              color: '#4572A7'
            },{
              y: parseFloat(graphData.B),
              color: '#AA4643'
            }, {
              y: parseFloat(graphData.C),
              color: '#89A54E'
            }, {
              y: parseFloat(graphData.D),
              color: '#80699B'
            }, {
              y: parseFloat(graphData.F),
              color: '#3D96AE'
            }, {
              y: parseFloat(graphData.W),
              color: '#DB843D'
            }
          ]
        }]
      });
    }
  });
  return HistoricalGradesView;
});