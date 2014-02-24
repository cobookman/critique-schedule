var cradle = require('cradle');
var db = new(cradle.Connection)().database('buzzapi_cache');

exports.get = function(id, callback) {
  if(typeof id === 'undefined') {
    throw new Error("No Id specified");
  }

  db.get(id, function(err, doc) {
    if(err || !doc.hasOwnProperty('cachedData')) {
      callback(err, null);
    } else {
      console.log(doc.cachedData);
      callback(null, doc.cachedData);

    }
  });
};
exports.set = function(id, doc, callback) {
  //If no callback given, will just log any errors
  if(typeof callback === 'undefined') {
    callback = function(err, res) {
      if(err) { console.log(err); }
    };
  }
  db.save(id, {cachedData: doc, create_time : JSON.stringify(new Date())}, callback);
};
