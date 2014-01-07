/*
  This view is for all navigational items
  The following nav bars are chosen throug zurb foundation's 
  CSS queries
    -the top bar (for bigger screens)
    -The mobile slide out menu (For smaller screens)
*/
define(['jquery', 'handlebars', 'foundation', 'backbone'],
function($,   Handlebars,   foundation, Backbone) {
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

        var scheduleID = ev.currentTarget.getAttribute('data-schedule');

        this.user.changeSelectedSchedule(scheduleID);
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
      //TODO - Should be done on page load as the templates would 
      //be pre-compiled with handlebars
      var topBarHTML = document.getElementById('template/top-bar').innerHTML;
      var leftOffCanvasMenuHTML = document.getElementById('template/left-off-canvas-menu').innerHTML;
      templates.topBar = Handlebars.compile(topBarHTML);
      templates.leftOffCanvasMenu = Handlebars.compile(leftOffCanvasMenuHTML);
      this.user.sort();
      var data = this.user.toJSON();
      $('.top-bar').html(templates.topBar(data));
      $('.left-off-canvas-menu').html(templates.leftOffCanvasMenu(data));
      this.bindEvents();
      $(document).foundation();
    },
    bindEvents : function() {
      var that = this;
      $('a[href="#changeSchedule"]').on('click touchstart', function(ev) { that.changeSchedule(ev); });
      $('#newScheduleModal > form').on('valid invalid submit', function(ev) { that.newSchedule(ev); });
      //Commented out line below as event as event is auto-handled by foundation
      // $('a[href="#newSchedule"]').on('click touchstart', function(ev) { that.newSchedule(ev); });
    },
    unbind : function() {
      this.user.off(null, null, this);
      $('a[href="#changeSchedule"]').off();
      $('input.createNewSchedule').off();
    }
  });
  return NavView;
});

//   templates.navigation = Handlebars.compile(document.getElementById('navigation-template').text);
//   var context = {
//     schedules : {
//       selected : {
//         semester : 'Fall',
//         year : 2013,
//         name : "Colin's Schedule",
//         id : 'colinsschedule'
//       },
//       others : [
//         {name: "Temp", year : 2013, semester : 'Spring', id: 'temp'},
//         {name: "Temp2", year : 2013, semester : 'Spring', id: 'temp2' },
//       ]
//     },
//     departments : [
//       {url : '/course/math', name: "Mathamatics"},
//       {url : '/course/ece', name: "Electrical and Computer Engineering"}
//     ],
//     user : {
//       name : 'cbookman3'
//     }
//   };
//   $(document).foundation();
//   return {
//     render : function() {
//       $('#main').html(templates.navigation(context));
//     }
//   };
// });