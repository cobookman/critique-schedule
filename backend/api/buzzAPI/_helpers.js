var request = require('request');
var config = require('../../config.js');
var Cache = require('../_cache.js');
var buzzAPICache = new Cache('buzzapi_cache');

var helpers = {};
helpers._cacheMiss = function(params) {
  request(params.url, function(error, response, body) {
    body = JSON.parse(body);
    if(error || !body.hasOwnProperty('api_result_data')) {
      params.callback({error: "Could not fetch data", response : response }, null);
    } else {
      params.callback(null, body.api_result_data);
      //set cache
      if(params.hasOwnProperty('id')) {
        buzzAPICache.set(params.id, body.api_result_data);
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
  buzzAPICache.get(params, this._cacheMiss, this._cacheHit);
};

helpers._cacheHit = function(params, doc) {
  //Send doc only if it hasn't expired, or has no expiration
  var timeLived = (new Date()) - (new Date(doc.create_time));
  if (!params.hasOwnProperty('ttl')) {
    params.callback(null, doc);
  } else if(timeLived < params.ttl) {
    params.callback(null, doc);
  } else {
    this._cacheMiss(params, callback);
  }
};

module.exports = helpers;

