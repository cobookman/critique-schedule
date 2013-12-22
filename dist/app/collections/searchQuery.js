define(['jquery', 'underscore', 'backbone'],
function($, _, Backbone) {
  var SearchQuery = Backbone.Collection.extend({
    page : 1,
    query : 'math',
    url : function() {
      return '/app/api/search/2013/query.' + this.query +'.page.' +this.page; // + this.query + '&from=' + this.page + '&number=' + this.number;
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