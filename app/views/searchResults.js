define(['jquery', 'backbone', 'handlebars', 'collections/searchQuery'],
function($,   Backbone,  Handlebars,    SearchQuery) {
  var SearchResults = Backbone.View.extend({
    el : '.searchResults',
    events : {
      'scroll' : 'checkScroll',
      'touchstart .viewSections' : 'viewSections',
      'click .viewSections' : 'viewSections'
    },
    isViewSectionLoading : false, //used to stop touchstart and click from firing on mobile
    resultModels : [], //Used to store the search result models
    viewSections : function(ev) {
      var that = this;
      if(!this.isViewSectionLoading) {
        this.isViewSectionLoading = true;
        setTimeout(function() {
          that.isViewSectionLoading = false;
        }, 100);
        var temp = document.getElementById('templates/viewSections').text;
        $(that.el).html(temp);
      }
    },
    initialize : function() {
      this.isLoading = false;
      this.searchQuery = new SearchQuery();
    },
    render : function() {
      this.loadResults();
      //TODO - PRE COMPILE TEMPLATE
      this.resultTemplate = document.getElementById('template/searchResult').text;
      this.resultTemplate = Handlebars.compile(this.resultTemplate);
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
            that.resultModels.push(results.models[i]);
            var id =results.models[i].attributes._id;
            //html += '<div class="row collapse">'+ id + '<br><br><br></div>';
            html += that.resultTemplate(results.models[i].attributes._source);
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