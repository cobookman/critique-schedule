var Cas = require('../api/cas');
var config = require('../config.js');
var cas = new Cas(config.cas);


var cradle = require('cradle');
var db = new(cradle.Connection)().database('users');

exports.login = function(req, res){
  var ticket = req.param('ticket');
  if(typeof ticket === 'undefined' || ticket.length < 1) {
    return res.jsonp({error: "Please provide the CAS service's ticket"});
  }
  cas.validate(ticket, function(err, username) {
    if(err) {
      res.jsonp(err);
    } else {
      req.session.username = username;
      res.jsonp({status: "logged in", username: username});
    }
  });
};

exports.getUsername = function(req, res) {
  if(req.session.username) {
     res.send(req.session.username);
   } else {
     res.send(null);
   }
};

exports.logout = function(req, res) {
    req.session.reset();
    res.jsonp({"status" : "logged out"});
};