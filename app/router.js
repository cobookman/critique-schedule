define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      'login' : 'login',
      '' : 'search',
      'contact(/)' : 'contact',
      'about(/)' : 'about',
      
      'calendar/:username/:schedulename(/)': 'calendar',
      'calendar/:username(/)' : 'calendar',

      '/watchedcourses/:username(/)': 'watchedcourses',


      ':year/:semester/search(/)' : 'search',
      ':year/:semester(/)' : 'search',
      /*
        Least descriptive, therefore @ end of file
        e.g: calendar/gburdell3/sampleSchedule will
        meet these rules
      */
      ':year/:semester/:department' : 'course',
      ':year/:semester/:department/:course' : 'course'
      
    },
  });
});
