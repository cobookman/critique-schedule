var helpers = require('./_helpers.js');
function classFees(params, callback) {
  if(!params.hasOwnProperty('termCode')) {
    return callback({error: "termCode is a required parameter"}, null);
  }
  if(!params.hasOwnProperty('crn')) {
    return callback({error: "crn is a required parameter"}, null);
  }
  var url = helpers.url('class_fees', {term_code : params.termCode});
  var cacheId = _genCacheId(params);
  helpers.apiRequest({cacheId: cacheId, url: url}, callback);
}

function classFees(params) {
  return 'classFees.' + params.termCode +'.'+params.crn;
}
module.exports = classFees;