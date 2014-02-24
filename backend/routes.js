module.exports = function(app) {
  /* 
    Load All Controllers 
  */
  var routes = {};
  require('fs').readdirSync(__dirname + '/routes').forEach(function(file) {
    if (file.match(/.+\.js/g) !== null && file !== 'index.js') {
      var name = file.replace('.js', '');
      routes[name] = require('./routes/' + file);
    }
  });
  /*
    Define Route->controller inter-action
  */
  app.get('/', routes.helpPage.get);
  app.get('/getusername', routes.user.getUsername);
  app.get('/login', routes.user.login);
  app.get('/logout', routes.user.logout);
  app.get('/buzzAPI/terms', routes.buzzAPI('terms'));
  app.get('/buzzAPI/subjects/:termCode', routes.buzzAPI('subjects'));
  app.get('/buzzAPI/sections/:termCode', routes.buzzAPI('sections'));
  app.get('/buzzAPI/campuses/:termCode', routes.buzzAPI('campuses'));
  app.get('/buzzAPI/partsOfTerm/:termCode', routes.buzzAPI('partsOfTerm'));
  app.get('/buzzAPI/instructors/:termCode', routes.buzzAPI('instructors'));
  app.get('/buzzAPI/courseAttributes/:termCode', routes.buzzAPI('courseAttributes'));

  app.get('/buzzAPI/classes/:termCode', routes.buzzAPI('classList'));
  app.get('/buzzAPI/classes/:termCode/:subject', routes.buzzAPI('classList'));
  app.get('/buzzAPI/classes/:termCode/:subject/:courseNumber', routes.buzzAPI('classList'));
  app.get('/buzzAPI/classes/:termCode/:subject/:courseNumber/:crn', routes.buzzAPI('classList'));
  
  app.get('/buzzAPI/seats/:termCode/:crn', routes.buzzAPI('seatCount'));
  app.get('/buzzAPI/courseDetails/:termCode/:crn', routes.buzzAPI('courseDetails'));
  app.get('/buzzAPI/classFees/:termCode/:crn', routes.buzzAPI('classFees'));
};