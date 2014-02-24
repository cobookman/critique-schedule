var helpers = require('./_helpers.js');

function campuses(params, callback) {
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"});
  }
  var url = helpers.url('campuses', {term_code : params.termCode});
  var cacheId = _genCacheId(params);
  helpers.apiRequest({id: cacheId, url: url}, callback);
}

function _genCacheId(params) {
  return 'campuses.' + params.termCode;
}
module.exports = campuses;