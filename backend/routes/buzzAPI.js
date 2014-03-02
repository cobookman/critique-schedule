var buzzAPI = require('../api/buzzAPI')();
module.exports = function(resource) {
  var fetchBuzzAPIResource = function(req, res) {
    buzzAPI[resource](req.params, function(err,data) {
      if(err) {
        res.status(404).jsonp(err);
      } else {
        res.jsonp(data);
      }
    });
  };
  return fetchBuzzAPIResource;
};