define(['jquery', 'handlebars', 'backbone', 'collections/grades'],
function($,        Handlebars,   Backbone,   GradesCollection ) {
  var HistoricalGradesView = Backbone.View.extend({
    el : '.site-content',
    graphEl : 'gradeGraph',
    events : {
      'click a.grades' : 'switchTo'
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
      this.grades = new GradesCollection([], options);
      this.loadTemplates();
    },
    remove : function() {
      this.$el.empty();
      this.stopListening();
      return this;
    },
    loadTemplates : function() {
      templates.grades = {};
      templates.grades.wrapper = Handlebars.compile(document.getElementById('template/grades/wrapper').innerHTML);
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
          if(that.grades.models.length === 1 && that.grades.models[0].attributes.hasOwnProperty('name')) {
            context.prof = that.grades.models[0].get('name');
          }
          var output = templates.grades.wrapper(context);
          that.$el.html(output);
          //Make first sub-nav item 'active'
          var firstSubNavItem = that.$el.find(' dl.sub-nav > dd:first');
          that.makeActive(firstSubNavItem);
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
    showData : function(active) {
      if(typeof active !== 'object') {
        active = this.findActive();
      }
      $('.gradeGraph').html("<h3>Active: " + active.text().trim() +"</h3>");
    },
    /*
      returns the currently active subnav item
    */
    findActive : function() {
      return this.$el.find('dl.sub-nav > dd.active');
    },
    /*
      Highlights subnav, then renders the graph for given jquery item
    */
    makeActive : function(jQueryItem) {
      this.findActive().removeClass('active');
      jQueryItem.addClass('active');
      this.showData(jQueryItem);
    },
    /*
      Switches the graph to the clicked sub-nav item
    */
    switchTo : function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      this.makeActive($(ev.target.parentNode));
    }
  });
  return HistoricalGradesView;
});