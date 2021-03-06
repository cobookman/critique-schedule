/*
  This view is for all navigational items
  The following nav bars are chosen throug zurb foundation's 
  CSS queries
    -the top bar (for bigger screens)
    -The mobile slide out menu (For smaller screens)
*/
define(['jquery', 'foundation', 'templates', 'backbone'],
function($      ,  foundation ,  templates ,  Backbone ) {
  var NavView = Backbone.View.extend({
    className : 'NavView',
    initialize: function(models, params) {
      this.user = params.user;
      this.user.bind('change', this.render, this);
    },
    touchTriggered : false,
    changeSchedule : function(ev) {
      ev.preventDefault();
      if(!this.touchTriggered) {
        this.touchTriggered = true;
        var that = this;
        setTimeout(function() { that.touchTriggered = false;}, 100);

        var scheduleId = ev.currentTarget.getAttribute('data-schedule');

        this.user.changeSelectedSchedule(scheduleId);
      }
    },
    deleteSchedule : function(ev) {
      ev.preventDefault();
      if(!this.touchTriggered) {
        this.touchTriggered = true;
        var that = this;
        setTimeout(function() { that.touchTriggered=false; }, 100);

        var scheduleId = ev.currentTarget.getAttribute('data-schedule');

        this.user.deleteSchedule(scheduleId);
      }
    },
    newSchedule : function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      if(ev.type === 'valid') {
        alert("HI WORLD");
        var scheduleObj = {
          name : document.getElementById('newScheduleName').value,
          semester : document.getElementById('newSemesterSelect').value,
          year : document.getElementById('newYearSelect').value
        };
        scheduleObj.id =  scheduleObj.name.replace(/\s|\,|\/|\\/g, '') + (new Date()).getTime();
        this.user.newSchedule(scheduleObj);
        this.closeModal();
      }
    },
    closeModal : function() {
       $('.reveal-modal').foundation('reveal','close');
    },
    render : function() {
      var data = this.user.toJSON();
      $('.top-bar').html(templates['nav/topbar'](data));
      $('.left-off-canvas-menu').html(templates['nav/leftOffCanvas'](data));
      this.bindEvents();
      $(document).foundation();
    },
    bindEvents : function() {
      var that = this;
      $('a[href="#changeSchedule"]').on('click touchstart', function(ev) { that.changeSchedule(ev); });
      $('a[href="#deleteSchedule"]').on('click touchstart', function(ev) { that.deleteSchedule(ev); });
      $('#newScheduleModal > form').on('valid invalid submit', function(ev) { that.newSchedule(ev); });
    },
    unbind : function() {
      this.user.off(null, null, this);
      $('a[href="#changeSchedule"]').off();
      $('a[href="#deleteSchedule"]').off();
      $('input.createNewSchedule').off();
    }
  });
  return NavView;
});