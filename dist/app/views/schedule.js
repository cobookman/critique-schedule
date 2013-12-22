define(['jquery', 'backbone'],
function(jquery,   Backbone) {
  var ScheduleView = Backbone.View.extend({
    el : '.schedule',
    render : function() {
        if(typeof templates.schedule === 'undefined') {
            templates.schedule = document.getElementById('template/schedule').innerHTML;
        }
        this.$el.html(templates.schedule);
    }
  });
  return ScheduleView;
});