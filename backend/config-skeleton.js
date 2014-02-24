module.exports = {
  dbs : [
    'buzzAPI_cache',
    'users',
    'grades'
  ],
  cas : {
    url : 'https://login.gatech.edu/cas',
    service : 'http://critique.gatech.edu'
  },
  buzzAPI : {
    urlRoot : 'https://dev.api.gatech.edu/apiv3/central.academics.course_catalog.',
    app_id : '*****',
    app_password : '******'
  }
};