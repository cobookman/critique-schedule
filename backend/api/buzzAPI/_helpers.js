var request = require('request');
var config = require('../../config.js');
var Cache = require('../cache.js');
var buzzAPICache = new Cache('buzzapi_cache');

var helpers = {};
helpers._cacheMiss = function(params) {
  request(params.url, function then(error, response, body) {
    body = JSON.parse(body);
    if (error || !body.hasOwnProperty('api_result_data')) {
      var errMsg = {error: "Could not fetch data"};
      if(body.hasOwnProperty ('api_error_info')) {
        errMsg.details = body.api_error_info;
      }
      params.callback(errMsg, null);

    } else {
      //send doc
      params.callback(null, body.api_result_data);
      //then save doc in cache
      if(params.hasOwnProperty('cacheId')) {
        buzzAPICache.set(params.cacheId, body.api_result_data);
      }
    }
  });
};

helpers.url = function(resource, params) {
  var url = config.buzzAPI.urlRoot + resource;
  url += '/search?api.app_id=' + config.buzzAPI.app_id;
  url += '&api.app_password=' + config.buzzAPI.app_password;
  url += '&api_request_mode=sync';
  for(var key in params) {
    url += '&'+key+'='+params[key];
  }
  return url;
};
/*
  Checks if api request was cached, and isn't to stale. 
  If its stale/doesn't exist sends a cache miss, else sends
  the cached api document
*/
helpers.apiRequest = function(params, callback) {
  params.callback = callback;
  buzzAPICache.get(params, this._cacheHit, this._cacheMiss);
};

helpers._cacheHit = function(params, doc) {
  params.callback(null, doc);
};

module.exports = helpers;

