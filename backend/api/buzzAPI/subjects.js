var helpers = require('./_helpers.js');
function subjects(params, callback) {
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"});
  }
  var url = helpers.url('subjects', {term_code : params.termCode});
  console.log(url);
  var cacheId = _genCacheId(params);
  helpers.apiRequest({cacheId: cacheId, url: url}, callback);

}

function _genCacheId(params) {
  return 'subjects.' + params.termCode;
}
module.exports = subjects;