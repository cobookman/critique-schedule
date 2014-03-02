var helpers = require('./_helpers.js');
function courseAttributes(params, callback) {
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"});
  }
  var url = helpers.url('course_attributes', {term_code : params.termCode});
  var cacheId = _genCacheId(params);
  helpers.apiRequest({cacheId: cacheId, url: url}, callback);
}

function _genCacheId(params) {
  return 'courseAttributes.' + params.termCode;
}
module.exports = courseAttributes;