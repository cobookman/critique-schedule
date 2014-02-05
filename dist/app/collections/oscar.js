define(['backbone'],
function(Backbone) {
  var Oscar = Backbone.Collection.extend({
    initialize: function(models, options) {
      this.year = options.year;
      this.semester = options.semester.toLowerCase();
      /* Optional Params */
      this.optionalURLParams = '';
      if(options.department) {
        this.optionalURLParams += '/' + options.department.toLowerCase();
      }
      if(options.course) {
        // TODO - Change '.' to '/', used for testing purposes
        this.optionalURLParams += '/' + options.course.toLowerCase(); //Course can have letters e.g: 1211k
      }
      if(options.crn) {
        this.optionalURLParams += '/' + options.crn;
      }
    },
    /*
      FOR GRUNT TESTING /app/api/ is used over /api (static files stored in /app/api/...)
    */
    url : function() {
      //return '/app/api/oscar/'+this.year+'/'+this.semester + this.optionalURLParams;
      return 'http://burdellanswers.com:3000/api/oscar/' + this.year +'/' + this.semester + this.optionalURLParams;
    },
    parse : function(res, xhr) {
      if(res.hasOwnProperty('sections')) {
        return res.sections;
      } else {
        return res;
      }
    }
  });
  return Oscar;
});

// var volvos = new SearchQuery([], {query:'volvo'});
// volvos.fetch();