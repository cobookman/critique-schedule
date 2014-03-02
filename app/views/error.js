define(['jquery', 'backbone'],
function($,        Backbone)  {
  var ErrorView = Backbone.View.extend({
    initialize : function(models, options) {
    },
    render : function(msg) {
      alert("ERROR: " + msg);
      throw new Error(msg);
    }
  });
  return ErrorView;
});
