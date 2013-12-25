define(['jquery', 'backbone',  'handlebars', 'views/schedule', 'collections/oscar'],
function($,        Backbone,    Handlebars,   ScheduleView,     OscarCollection) {
  var OscarView = Backbone.View.extend({
    el : '.site-content',
    oscarData : '.oscar-data',
    events : {
    },
    initialize : function(models, options) {
      this.loadTemplates();
      this.oscar = new OscarCollection([] , options);
      this.year = options.year;
      this.semester = options.semester;
      this.listTemplate = templates.oscar.department;
      this.title = this.semester.toCapital() + ", " + this.year;
      /* Optional Params */
      if(options.department) {
        this.listTemplate = templates.oscar.courses;
        this.department = options.department;
        this.title += ': ' + this.department;
      }
      if(options.course) {
        this.listTemplate = templates.oscar.section;
        this.course = options.course;
        this.title += ' ' + this.course;
      }

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
      Handlebars.registerHelper('notTBA', function(item, options) {
        var out = '';
        if(item.toLowerCase() !== 'tba' && item) {
          out = options.fn(item);
        }
        return out;
      });
      if(typeof templates.oscar.main === 'undefined') {
        templates.oscar.main = Handlebars.compile(document.getElementById('template/oscar/main').innerHTML);
      }
      if(typeof templates.oscar.section === 'undefined') {
        templates.oscar.section = Handlebars.compile(document.getElementById('template/oscar/section').innerHTML);
      }
      if(typeof templates.oscar.department === 'undefined') {
        templates.oscar.department = document.getElementById('template/oscar/department').innerHTML;
      }
      if(typeof templates.oscar.course === 'undefined') {
        templates.oscar.course = document.getElementById('template/oscar/course').innerHTML;
      }
    },
    render : function() {
      this.$el.html(templates.oscar.main({title: this.title }));
      /* Schedule attached to right */
      this.scheduleView = new ScheduleView();
      /* Render Wrapper/main */
      this.scheduleView.render();
      this.getAndRenderCollection();
    },
    getAndRenderCollection : function() {
      var that = this;
      this.oscar.fetch({
        success : function(results) {
          var html = '';
          for(var i =0; i < results.length; ++i) {
            html += that.listTemplate(results.models[i].attributes);
          }
          $(that.oscarData).html(html);
        },
        error : function(r, s) {
          //TODO - Better Error Handling
          alert('Error: \n' + JSON.stringify(s));
        }
      });
    }
  });
  return OscarView;

});