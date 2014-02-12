define(['jquery', 'backbone'],
function($,        Backbone)  {
  var CalendarView = Backbone.View.extend({
    initialize : function(models, options) {
      if(typeof options.schedulename === 'undefined' || typeof options.username === 'undefined') {
        throw new Error("The schedulename and username must be specified in the View's options");
      }
      this.schedulename = options.schedulename;
      this.username = options.username;
    },
    render : function() {
      alert("TODO - implement rendering");
    }
  });
  return CalendarView;
});
