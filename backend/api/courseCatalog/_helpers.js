var config = require('../../config.js');
var Cache = require('../cache.js');
var request = require('request');
var cache = new Cache('courseCatalog_cache');

function helpers() {
}
/*
  Checks if api request was cached, and isn't to stale. 
  If its stale/doesn't exist sends a cache miss, else sends
  the cached api document
*/
helpers.prototype.getURL = function(url, callback) {
  request.get(url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      callback(null, body);
    } else {
      callback("Couldn't fetch URL: " + url + "Error: " + error);
    }
  });
};


module.exports = new helpers();

