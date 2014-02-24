var buzzAPI = require('../api/buzzAPI')();
var db = 
module.exports = function(resource) {
  var fetchBuzzAPIResource = function(req, res) {
    buzzAPI[resource](req.params, function(err,data) {
      if(err) {
        res.jsonp(err);
      } else {
        res.jsonp(data);
      }
    });
  };
  return fetchBuzzAPIResource;
};