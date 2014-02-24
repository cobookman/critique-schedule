var helpers = require('./_helpers.js');

function instructors(params, callback) {
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"});
  }
  var url = helpers.url('instructors', {term_code : params.termCode});
  var cacheId = _genCacheId(params);
  helpers.apiRequest({cacheId: cacheId, url: url}, callback);
}

function _genCacheId(params) {
  return 'instructors.' + params.termCode;
}
module.exports = instructors;