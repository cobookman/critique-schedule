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
  /* Oscar Webscraper */
  var coreCurriculum = require('./api/courseCatalog/coreCurriculum.js');
  (function() {
    var a = new coreCurriculum('corec');
    a.get(function(err, doc) {
      // console.log("HI WORLD");
      // console.log("Error: " + JSON.stringify(err));
      // console.log("Doc: " + doc);
    });
  })();
  // app.get(/^\/api\/core\/(c|humanities)\/?$/i, new coreCurriculum('areaC'));
  // app.get(/^\/api\/core\/(e|socialsciences)\/?$/i, coreCurriculumController.areaE);
  // app.get(/^\/api\/core\/(gp|globalperspectives)\/?$/i, coreCurriculumController.globalPerspectives);
  // app.get(/^\/api\/core\/(usp|usPerspectives)\/?$/i, coreCurriculumController.usPerspectives);
  // app.get('/api/core/ethics', coreCurriculumController.ethics);

  /* BuzzAPI */
  app.get('/buzzAPI/help', routes.helpPage.get);
  app.get('/buzzAPI/terms', routes.buzzAPI('terms'));
  app.get('/buzzAPI/subjects/:termCode', routes.buzzAPI('subjects'));
  app.get('/buzzAPI/sections/:termCode', routes.buzzAPI('sections'));
  app.get('/buzzAPI/campuses/:termCode', routes.buzzAPI('campuses'));
  app.get('/buzzAPI/partsOfTerm/:termCode', routes.buzzAPI('partsOfTerm'));
  app.get('/buzzAPI/instructors/:termCode', routes.buzzAPI('instructors'));
  app.get('/buzzAPI/courseAttributes/:termCode', routes.buzzAPI('courseAttributes'));
  
  app.get('/buzzAPI/classes', routes.buzzAPI('terms'));
  app.get('/buzzAPI/classes/:termCode', routes.buzzAPI('subjects'));
  app.get('/buzzAPI/classes/:termCode/:subject', routes.buzzAPI('classes'));
  app.get('/buzzAPI/classes/:termCode/:subject/:courseNumber', routes.buzzAPI('classes'));
  app.get('/buzzAPI/classes/:termCode/:subject/:courseNumber/:crn', routes.buzzAPI('classes'));
  
  app.get('/buzzAPI/seats/:termCode/:crn', routes.buzzAPI('seatCount'));
  app.get('/buzzAPI/courseDetails/:termCode/:crn', routes.buzzAPI('courseDetails'));
  app.get('/buzzAPI/classFees/:termCode/:crn', routes.buzzAPI('classFees'));
};