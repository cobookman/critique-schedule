define(['jquery', 'handlebars', 'backbone', 'models/grades', 'highcharts', 'libraries/yearSemesterSort'],
function($,        Handlebars,   Backbone,   GradesModel,     Highcharts ,  yearSemesterSort) {
  var HistoricalGradesView = Backbone.View.extend({
    el : '.site-content',
    graphEl : '.graphs-content',
    events : {
      
    },
    initialize : function(models, options) {
      if(typeof options.user === 'undefined' || typeof options.department === 'undefined') {
        throw new Error('user and department are required params');
      }
      this.user = options.user;
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
      this.loadTemplates();
    },
    remove : function() {
      this.$el.empty();
      this.stopListening();
      return this;
    },
    loadTemplates : function() {
      if(typeof templates.grades) {
        templates.grades = {};
      }
      if(typeof templates.grades.wrapper === 'undefined') {
        templates.grades.wrapper = Handlebars.compile(document.getElementById('template/grades/wrapper').innerHTML);
      }
      if(typeof templates.grades.profTable === 'undefined') {
        templates.grades.profTable = Handlebars.compile(document.getElementById('template/grades/profTable').text);
      }
      if(typeof templates.grades.profTableEntry === 'undefined')
        templates.grades.profTableEntry = Handlebars.compile(document.getElementById('template/grades/profTable-entry').text);
    },
    render : function() {
      var that = this;
      this.grades.fetch({
        success : function() {
          var context = {
            profId : that.profId,
            course : that.course,
            department : that.department,
            user : that.user.toJSON(),
            grades : that.grades.toJSON(),
          };
          if(that.grades.attributes.hasOwnProperty('name')) {
            context.prof = that.grades.get('name');
          }
          var output = templates.grades.wrapper(context);
          that.$el.html(output);
          that.showData();
        },
        failure : function(r,s) {
          alert('404: Could not find grade data');
          throw new Error("No Grade Data found for: " + this.grades.url());
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
      $('.grade-tables').append(templates.grades.profTable({isMultipleProfs : true}));
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
        outputHTML += templates.grades.profTableEntry(context);
      }
      $('.grade-tables table > tbody').append(outputHTML);
      this.renderGraph(this.grades.get('statistics'));
    },
    showProfData : function() {
      $('.grade-tables').append(templates.grades.profTable({isMultipleProfs : false}));
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
              semester : semester[0].toUpperCase() + semester.substring(1).toLowerCase(),
              section : section,
              gpa : sections[section].gpa,
              A : sections[section].A,
              B : sections[section].B,
              C : sections[section].C,
              D : sections[section].D,
              F : sections[section].F,
              W : sections[section].W,
              size : sections[section].size
            };
            outputHTML += templates.grades.profTableEntry(context);
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
          name : "grade distribution",
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