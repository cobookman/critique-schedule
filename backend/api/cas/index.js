var request = require('request');

function Cas(params) {
  /*
    Required Parameters
  */
  if(typeof params.service === 'undefined') {
    throw new Error("No service specified for CAS");
  }

  if(typeof params.url === 'undefined') {
    throw new Error("No URL specified for CAS");
  }
  
  /*
    Save Parameters
  */
  this.service = params.service;

  //remove any trailing slash on url
  this.url = params.url;
  if(params.url.substr(-1) === '/') {
    this.url = this.url.substr(0, params.url.length - 1);
  }
}

Cas.prototype.validate = function(ticket, callback) {
    if(ticket.length < 1) {
      return callback({error: "Improper ticket given"}, null);
    }
    var that = this;
    var validationUrl = this.url + '/serviceValidate?ticket=' + ticket + '&service=' + this.service;
    request(validationUrl, function(error, response, body) {
      var userIndex = {
        start : body.indexOf('<cas:user>'),
        end : body.indexOf('</cas:user>')
      };
      if(!error && userIndex.start >=0 && userIndex.end >= 0) {
        var username = body.substring(userIndex.start + "<cas:user>".length, userIndex.end).trim("\n");
        callback(null, username);
      } else {
        callback({error : "Could not login user"}, null);
      }
    });
};
module.exports = Cas;
