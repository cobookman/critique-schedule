
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

/* Sessions */
var sessions = require("client-sessions");
app.use(sessions({
  cookieName: 'session', // cookie name dictates the key name added to the request object
  secret: 'yw5yftxyTuns47Z067PfMoU/cFEl1d9ISRYk0KdljIvUDm3uxQBOH5unmDTmUPxxQ8z05UeSuvItTh4RKrqE2L8gsrDYu/NxK+3cQXV3Y0F7w5oDzhldekJMY8vEYMNFlQDQYw==', // should be a large unguessable string
  duration: 5 * 24 * 60 * 60 * 1000, // how long the session will stay valid in ms (5 days)
  activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//Include router
require('./routes.js')(app);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
