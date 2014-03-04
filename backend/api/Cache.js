var cradle = require('cradle');
function Cache(dbName) {
  this.db = new(cradle.Connection)().database(dbName);
}
Cache.prototype.get = function(params, cacheHit, cacheMiss) {
  if (typeof params.cacheId === 'undefined') {
    return cacheMiss(params);
  }
  var that = this;
  this.retrieveDoc(params.cacheId, function then(err, doc) {
    if (err || that.expired(params, doc)) {
      cacheMiss(params);
    } else {
      //send back just the cached data
      cacheHit(params, doc.cachedData);
    }
  });
};
/*
  Checks document to see if its expired past a specified TTL
    true = expired
    false = hasn't expired
*/
Cache.prototype.expired = function(params, doc) {
  var currTime = new Date();
  var createTime = new Date(JSON.parse(doc.create_time));
  var timeSpan = currTime - createTime;

  if (params.hasOwnProperty('TTL') && timeSpan > params.TTL) {
    return true;
  } else {
    return false;
  }
};

Cache.prototype.retrieveDoc = function(cacheId, callback) {
  if (typeof cacheId === 'undefined') {
    throw new Error("No Id specified");
  }
  this.db.get(cacheId, function(err, doc) {
    if (err || !doc.hasOwnProperty('cachedData')) {
      console.log("Could not retrieve Doc: " + JSON.stringify(err));
      callback(err, null);
    } else {
      callback(null, doc);
    }
  });
};

Cache.prototype.set = function(id, doc, callback) {
  //If no callback given, will just log any errors
  if (typeof callback === 'undefined') {
    callback = function(err, res) {
      if(err) { console.log("Error setting Cache: " + JSON.stringify(err)); }
    };
  }
  //Format doc for couchDB cache retriaval
  doc = {
    cachedData : doc,
    create_time : JSON.stringify(new Date())
  };
  this.db.save(id, doc, callback);
};
module.exports = Cache;