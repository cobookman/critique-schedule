var helpers = require('./_helpers.js');

function classes(params, callback) {
  //Only required get parameter
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"});
  }
  var context = _cacheIdAndURLParams(params);
  context.url =  helpers.url('classes',context.urlParameters);
  helpers.apiRequest(context, callback);
}

/*
  RESTful API URL in format of:
     /buzzAPI/classes/:termCode/:subject/:courseNumber/:crn
*/
function _cacheIdAndURLParams(params) {
  var output = {
    urlParameters : { term_code : params.termCode},
    cacheId : 'classes.' + params.termCode
  };
  output.TTL = 5 * 60 * 1000; //5 mins in miliseconds
  /*
    optional parameters
  */
  if (!params.hasOwnProperty('subject')) {
    return output;
  }
  output.urlParameters.subject = params.subject;
  output.cacheId += '.' + params.subject;

  if (!params.hasOwnProperty('courseNumber')) {
    return output;
  }
  //Add TTL (in ms) as data below this point can become stale
  output.TTL = 5 * 60 * 1000; //5 mins in miliseconds
  output.urlParameters.course_number = params.courseNumber;
  output.cacheId += '.' + params.courseNumber;

  if (!params.hasOwnProperty('crn')) {
    return output;
  }
  output.urlParameters.crn = params.crn;
  output.cacheId += '.' + params.crn;

  return output;
}
module.exports = classes;