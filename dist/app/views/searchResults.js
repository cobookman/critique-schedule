define(['jquery', 'backbone', 'collections/searchQuery'],
function(jquery,   Backbone,  SearchQuery) {
  var SearchResults = Backbone.View.extend({
    el : '.searchResults',
    events : {
      'scroll' : 'checkScroll'
    },
    initialize : function() {
      this.isLoading = false;
      this.searchQuery = new SearchQuery();
    },
    render : function() {
      this.loadResults();
    },
    loadResults : function() {
      var that = this;
      this.isLoading = true;
      this.searchQuery.fetch({
        success : function(results) {
          if(results.length < 1) {
            return $(this.el).off('scroll');
          }
          //Populate template
          var html='';
          for(var i = 0; i < results.length; ++i) {
            var id =results.models[i].attributes._id;
            html += '<div class="row collapse">'+ id + '<br><br><br></div>';
          }
          $(that.el).append(html);
          that.isLoading = false;
        }
      });
    },
    checkScroll : function() {
      var triggerPoint = 100; //if 100px from bottom
      if(!this.isLoading && this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight) {
          this.searchQuery.page += 1; // Load next page
          this.loadResults();
      }
    }
  });
  return SearchResults;
});