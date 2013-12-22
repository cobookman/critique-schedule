define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      '' : 'search',
      'search' : 'search',
      'login' : 'login',
      'course/:department/:number(/)' : 'course',
      'course/:department(/)' : 'course',
      'course(/)' : 'course',
      'watchedcourses/:username(/)': 'watchedcourses',
      'calendar/:username/:schedulename(/)': 'calendar',
      'schedule/:schedulename(/)': 'schedule',
      'schedule' : 'schedule',
      'contact' : 'contact',
      'about' : 'about'
    },
  });
});
