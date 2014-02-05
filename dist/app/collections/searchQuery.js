define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone) {
  var SearchQuery = Backbone.Collection.extend({
    initialize: function(models, options) {
      this.query = options.query;
      this.year = options.year;
      this.semester = options.semester;
    },
    page : 1,
    /*
      FOR GRUNT TESTING /app/api/ is used over /api (static files stored in /app/api/...)
    */
    url : function() {
      return 'http://burdellanswers:3000/api/search/' + this.year + '/' + this.semester + '?query=' + this.query + '&page=' + this.page;
      //return '/app/api/search/'+this.year+'/query.' + this.query +'.page.' +this.page; // + this.query + '&from=' + this.page + '&number=' + this.number;
    },
    parse : function(res, xhr) {
      this.took = res.took;
      return res.hits.hits; //where is each model residing
    }
  });
  return SearchQuery;
});

// var volvos = new SearchQuery([], {query:'volvo'});
// volvos.fetch();