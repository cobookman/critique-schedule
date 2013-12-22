define(['jquery', 'backbone', 'queryString', 'views/schedule', 'views/searchResults'],
function($,   Backbone,   queryString,   ScheduleView,     SearchResults ) {
  var SearchView = Backbone.View.extend({
    el : '.site-content',
    events : {
      'submit .searchbar' : 'runQuery'
    },
    render : function() {
      //TODO - Remove this if, and pre-cache
      if(typeof templates.search === 'undefined') {
        templates.search = document.getElementById('template/search').innerHTML;
      }
      //Load Search Template, and the search view has a schedule view on right hand side
      this.$el.html(templates.search);
      var scheduleView = new ScheduleView();
      scheduleView.render();
    },
    runQuery : function(event) {
      event.preventDefault();
      var query = this.getQuery();
      if(query.length > 1) {
        history.pushState({}, "", 'search?query='+query);
        this.removeOldResults();
        this.searchResults = new SearchResults([], {query : 'math'});
        this.searchResults.render();
      }
    },
    getQuery : function() {
      var query = '';
      var searchBarQuery = document.querySelector('.searchbar input').value.trim();
      var urlParams = queryString.parse();
      if(searchBarQuery.length > 1) {
        query = searchBarQuery;
      } else if(urlParams.hasOwnProperty('query') && urlParams.query.trim().length > 1) {
        query = urlParams.query.trim();
      }
      return query;
    },
    removeOldResults : function() {
      if(typeof this.searchResults !== 'undefined') {
        alert("this isn't triggering...right?");
        this.searchResults.destroy();
        this.searchResults.unbind();
      }
    }
  });
  return SearchView;
});