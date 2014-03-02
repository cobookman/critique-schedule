var helpers = require('./_helpers.js');
function seatCount(params, callback) {
  if (!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"}, null);
  }
  if (!params.hasOwnProperty('crn')) {
    return callback({error: "crn is a required parameter"}, null);
  }
  var url = helpers.url('course_details', {term_code : params.termCode, crn : params.crn});
  var cacheId = _genCacheId(params);
  helpers.apiRequest({cacheId: cacheId, url: url}, callback);
}

function _genCacheId(params) {
  return 'courseDetails.' + params.termCode + '.' + params.crn;
}
module.exports = seatCount;