var helpers = require('./_helpers.js');
function partsOfTerm(params, callback) {
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"});
  }
  var url = helpers.url('parts_of_term', {term_code : params.termCode});
  var cacheId = _genCacheId(params);
  helpers.apiRequest({cacheId: cacheId, url: url}, callback);
}

function _genCacheId(params) {
  return 'partsOfTerm.' + params.termCode;
}
module.exports = partsOfTerm;