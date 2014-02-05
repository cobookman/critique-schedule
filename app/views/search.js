define(['jquery', 'backbone', 'queryString', 'views/schedule', 'views/searchResults'],
function($,   Backbone,   queryString,   ScheduleView,     SearchResults ) {
  var SearchView = Backbone.View.extend({
    el : '.site-content',
    events : {
    },
    initialize : function(models, options) {
      this.user = models.user;
      this.loadTemplates();
      this.user.bind('change', this.render, this);
    },
    remove : function() {
      if(this.scheduleView) { //Just in case the scheduleView dies and burns to death!!!
        this.scheduleView.remove();
      }
      if(this.searchResults) { //there might not be any search results
        this.searchResults.remove();
      }
      this.$el.empty();
      this.stopListening();
      this.user.unbind("change", this.render);
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
        this.setInputValue(query);
        var schedules = this.user.get('schedules');
        this.searchResults = new SearchResults([], {
          query: query,
          year: schedules.selected.year,
          semester : schedules.selected.semester.toCapital()
        });
        this.searchResults.render();
      }
    },
    setInputValue : function(data) {
      $('.search').val(data);
    },
    getQuery : function(event) {
      var target = event.originalEvent.target;
      for(var i =0, l = target.length; i<l; ++i) {
        if(target[i].value && target[i].value.trim().length >0) {
          return target[i].value.trim();
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