define(['jquery', 'backbone', 'handlebars', 'collections/searchQuery'],
function($,   Backbone,  Handlebars,    SearchQuery) {
  var SearchResults = Backbone.View.extend({
    el : '.searchResults',
    events : {
    },
    isViewSectionLoading : false, //used to stop touchstart and click from firing on mobile
    initialize : function(models, options) {
      this.year = options.year;
      this.semester = options.semester.toCapital();
      this.isLoading = false;
      this.query = options.query;
      this.searchQuery = new SearchQuery([], { query :  this.query, year : this.year, semester: this.semester});
      this.bindEvents();
    },
    bindEvents : function() {
      var that = this;
      $(document).on('scroll', function() { that.checkScroll.call(that); });
    },
    unbindEvents : function() {
      this.unbindScroll();
    },
    unbindScroll : function() {
      $(document).off('scroll');
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
          var html='';
          /*
            turn off scroll bind if no results, 
            as we've obviously fetched all the results
          */
          if(results.length < 1) {
            that.unbindScroll();
            /* 
              if its a new query string, we should show an err msg 
              telling end user that no results for given querystr
            */
            if($(that.el).html().trim().length === 0) {
              html = "0 Results found";
            }
          }
          

          //Generate templates
          for(var i = 0; i < results.length; ++i) {
            var currModel = results.models[i].get('_source');
            //attach the year/semester)
            currModel.year = that.year;
            currModel.semester = that.semester.toCapital();
            //Capitalize...
            currModel.department.code = currModel.department.code.toCapital();
            currModel.course = currModel.name;
            //render template
            html += that.resultTemplate(currModel);
          }
          $(that.el).append(html); //add rendered templates to dom
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
      this.unbindEvents();
      this.$el.empty();
      this.stopListening();
      return this;
    }
  });
  return SearchResults;
});