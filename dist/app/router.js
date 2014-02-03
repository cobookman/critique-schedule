define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      'contact(/)' : 'contact',
      'about(/)' : 'about',
      'login(/)' : 'login',
      'logout(/)' : 'logout',

      'calendar/:username/:schedulename(/)': 'calendar',
      'calendar/:username(/)' : 'calendar',

      'grades/:department(/)' : 'grades',
      'grades/:department/:course(/)' : 'grades',
      'grades/:department/:course/:profId(/)' : 'grades',

      'watchedcourses/:username(/)': 'watchedcourses',

      '(/)' : 'search',
      'index' : 'search',
      ':year/:semester/search(/)' : 'search',
      ':year/:semester/search/:query(/)' : 'search',
      /*
        Least descriptive, therefore @ end of file
        e.g: calendar/gburdell3/sampleSchedule will
        meet these rules
      */
      ':year/:semester(/)' : 'oscarDepartments',
      ':year/:semester/:department(/)' : 'oscarCourses',
      ':year/:semester/:department/:course(/)' : 'oscarSections'
      
    },
  });
});
