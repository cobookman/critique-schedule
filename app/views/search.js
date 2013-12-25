define(['jquery', 'backbone', 'queryString', 'views/schedule', 'views/searchResults'],
function($,   Backbone,   queryString,   ScheduleView,     SearchResults ) {
  var SearchView = Backbone.View.extend({
    el : '.site-content',
    events : {
    },
    initialize : function(models, options) {
      this.loadTemplates();
      this.year = options.year;
      this.semester = options.semester;
    },
    remove : function() {
      this.scheduleView.remove();
      this.$el.empty();
      this.stopListening();
      return this;
    },
    //TODO - Remove this once pre-cache of templates done
    loadTemplates : function() {
       if(typeof templates.search === 'undefined') {
        templates.search = document.getElementById('template/search').innerHTML;
      }
    },
    render : function() {
      //Load Search Template (schedule view attached on left hand side)
      this.$el.html(templates.search);
      this.scheduleView = new ScheduleView();
      this.scheduleView.render();
    },
    runQuery : function(query) {
      if(query.length > 0) {
        this.removeOldResults();
        this.query = query;
        this.searchResults = new SearchResults([], { query: query, year: this.year, semester : this.semester});
        this.searchResults.render();
      }
    },
    getQuery : function() {
      var queries = document.getElementsByClassName('search');
      for(var i = 0; i < queries.length; ++i) {
        if(queries[i].value.trim().length > 0) {
          return queries[i].value.trim();
        }
      }
    },
    urlString : function(query) {
      return encodeURIComponent(query);
    },
    removeOldResults : function() {
      if(typeof this.searchResults !== 'undefined') {
        this.searchResults.remove();
        this.searchResults = null;
      }
    }
  });
  return SearchView;
});