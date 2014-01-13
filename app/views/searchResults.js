define(['jquery', 'backbone', 'handlebars', 'collections/searchQuery'],
function($,   Backbone,  Handlebars,    SearchQuery) {
  var SearchResults = Backbone.View.extend({
    el : '.searchResults',
    events : {
    },
    isViewSectionLoading : false, //used to stop touchstart and click from firing on mobile
    resultModels : [], //Used to store the search result models
    initialize : function(models, options) {
      this.year = options.year;
      this.semester = options.semester.toCapital();
      this.isLoading = false;
      this.query = options.query;
      this.searchQuery = new SearchQuery([], { query :  this.query, year : this.year, semester: this.semester});
      var that = this;
      $(document).on('scroll', function() { that.checkScroll.call(that); });
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
            //attach the year/semester)
            results.models[i].attributes._source.year = that.year;
            results.models[i].attributes._source.semester = that.semester.toCapital();
            //Capitalize...
            results.models[i].attributes._source.department.code = results.models[i].attributes._source.department.code.toCapital();
            results.models[i].attributes._source.name = results.models[i].attributes._source.name.toCapital();
            //render template
            html += that.resultTemplate(results.models[i].attributes._source);
          }
          $(that.el).append(html);
          that.isLoading = false;
        },
        /*
          TODO - Better Error Handling
        */
        error : function() {
          alert("404, could not run your query of: " + that.query);
        }
      });
    },
    checkScroll : function() {
      var triggerPoint = 150; //if 100px from bottom
      var win = $(window);
      if(!this.isLoading && win.scrollTop() + win.height() + triggerPoint > $(document).height()) {
          this.searchQuery.page += 1; // Load next page
          this.loadResults();
      }
    },
    /* 
      @OVERRIDE of backbone,
      just want to empty, not remove el
    */
    remove : function() {
      this.$el.empty();
      this.stopListening();
      return this;
    }
  });
  return SearchResults;
});