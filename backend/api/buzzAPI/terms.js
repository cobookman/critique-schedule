var helpers = require('./_helpers.js');

function terms(params, callback) {
  var url = helpers.url('terms');
  var cacheId = _genCacheId(params);
  helpers.apiRequest({id: cacheId, url: url}, callback);
}

function _genCacheId(params) {
  return 'terms';
}

module.exports = terms;