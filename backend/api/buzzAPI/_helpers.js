var request = require('request');
var config = require('../../config.js');
var cache = require('./_cache.js');

var _cacheMiss = function(params, callback) {
  request(params.url, function(error, response, body) {
    body = JSON.parse(body);
    if(error || !body.hasOwnProperty('api_result_data')) {
      callback({error: "Could not fetch data", response : response }, null);
    } else {
      callback(null, body.api_result_data);
      //set cache
      if(params.hasOwnProperty('id')) {
        cache.set(params.id, body.api_result_data);
      }
    }
  });
};
exports._cacheMiss = _cacheMiss;

exports.url = function(resource, params) {
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
exports.apiRequest = function(params, callback) {
  if(typeof params.id === 'undefined') { _cacheMiss(params, callback); }
  
  cache.get(params.id, function(err, doc) {
    //for w/e reason we couldnt retrieve the doc, trigger cache miss
    if(err) {
      _cacheMiss(params, callback);
    //Check if the document has expired its ttl, only if param given
    } else if(params.hasOwnProperty('ttl')) {
      var timeLived = (new Date()) - (new Date(doc.create_time));
      if(timeLived < params.ttl) {
        _cacheMiss(params, callback);
      }
    //Neither an error nor expired ttl, send cached document
    } else {
      callback(null, doc);
    }
  });
};


