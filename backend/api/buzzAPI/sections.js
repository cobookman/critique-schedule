var helpers = require('./_helpers.js');

function sections(params, callback) {
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"});
  }
  var url = helpers.url('meeting_types', {term_code : params.termCode});
  var cacheId = _genCacheId(params);
  helpers.apiRequest({cacheId: cacheId, url: url}, callback);
}
/*
  Internal method which generates a unique cache id
  for each section resource
*/
function _genCacheId(params) {
  return 'meeting_types.' + params.termCode;
}

module.exports = sections;