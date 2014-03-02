exports.get = function(req, res) {
  res.jsonp({
    "Valid API URLs" : [
      '/getusername',
      '/login',
      '/logout',
      '/buzzAPI/terms',
      '/buzzAPI/subjects/:termCode',
      '/buzzAPI/sections/:termCode',
      '/buzzAPI/campuses/:termCode',
      '/buzzAPI/partsOfTerm/:termCode',
      '/buzzAPI/instructors/:termCode',
      '/buzzAPI/courseAttributes/:termCode',
      '/buzzAPI/classes',
      '/buzzAPI/classes/:termCode',
      '/buzzAPI/classes/:termCode/:subject',
      '/buzzAPI/classes/:termCode/:subject/:courseNumber',
      '/buzzAPI/classes/:termCode/:subject/:courseNumber/:crn',
      '/buzzAPI/seats/:termCode/:crn',
      '/buzzAPI/courseDetails/:termCode/:crn',
      '/buzzAPI/classFees/:termCode/:crn'
    ]
  });
};
