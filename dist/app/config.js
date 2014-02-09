// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  paths: {
    // Make vendor easier to access.
    "vendor": "../vendor",

    // Almond is used to lighten the output filesize.
    "almond": "../vendor/bower/almond/almond",

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",

    // Map remaining vendor dependencies.
    "jquery": "../vendor/bower/jquery/jquery",
    "backbone": "../vendor/bower/backbone/backbone",
    "handlebars" : "../vendor/bower/handlebars/handlebars.min",
    "modernizr" : "../vendor/bower/foundation/js/vendor/custom.modernizr",
    "foundation" : "../vendor/bower/foundation/js/foundation.min",
    "queryString" : "libraries/queryString",
    "yearSemesterSort" : "libraries/yearSemesterSort",
    "highcharts" : "../vendor/highcharts/js/highcharts-all",

    //Views
    "views/nav" : "views/nav",
    "views/schedule" : "views/schedule",
    "views/search" : "views/search",
    "views/searchResults" : "views/searchResults",
    "views/oscar" : "views/oscar",
    "views/scheduleSection" : "views/scheduleSection",
    "views/sectionPopup" : "views/sectionPopup",
    "views/calendar" : "views/calendar",
    
    //Modules
    "models/user" : "models/user",
    "models/grades" : "models/grades",

    //Collections
    "collections/searchQuery" : "collections/searchQuery",
    "collections/oscar" : "collections/oscar",

    /*
      Not using collections/... format as 
      it just returns an obj which contains the list of departments
    */
    "departmentList" : "collections/departmentList"

  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],

      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },
    "handlebars" : {
      exports: "Handlebars",
      init: function() {
        this.Handlebars = Handlebars;
        return this.Handlebars;
      }
    },
    "foundation" : {
      deps: ["jquery", "modernizr"]
    },
    "highcharts" : {
        exports: 'Highcharts'
    }
  }
});
