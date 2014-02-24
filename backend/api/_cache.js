var cradle = require('cradle');
function Cache(dbName) {
  this.db = new(cradle.Connection)().database(dbName);
}
Cache.prototype.get = function(params, cacheMiss, cacheHit) {
  if (typeof params.cacheId === 'undefined') {
    return cacheMiss(params);
  }

  this.retrieveDoc(params.cacheId, function then(err, doc) {
    if (err) {
      cacheMiss(params);
    } else {
      cacheHit(params, doc);
    }
  });
};

Cache.prototype.retrieveDoc = function(cacheId, callback) {
  if (typeof cacheId === 'undefined') {
    throw new Error("No Id specified");
  }

  this.db.get(cacheId, function(err, doc) {
    if (err || !doc.hasOwnProperty('cachedData')) {
      callback(err, null);
    } else {
      callback(null, doc.cachedData);
    }
  });
};

Cache.prototype.set = function(id, doc, callback) {
  //If no callback given, will just log any errors
  if (typeof callback === 'undefined') {
    callback = function(err, res) {
      if(err) { console.log(err); }
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