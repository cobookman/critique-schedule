function classes() {

}
/*
  Build cacheId in format: YYYY.Semester.Department.Course.CRN
*/
classes.prototype.cacheId = function(params) {
  /*
    paramList, lists the api's parameters in the 
    order of dependency
    e.g:
  */
  var cacheId = ''+ params.year;
  var paramList = ['semester', 'department', 'course', 'crn'];
  for(var i = 0; i < params.length; ++i) {
    var param = paramList[i];
    if(!params.hasOwnProperty(param)) {
      return cacheId; //stop generation of cacheId
    }
    cacheId += ( '.' + params[param]);
  }
  return cacheId;
};

classes.prototype.get = function(callback) {
  //scope hack
  var that = this;
  var cacheMiss = function(cacheParams) { that.cacheMiss(params); };
  var cacheHit = function(cacheParams, doc) { that.cacheHit(params, doc); };

  var cacheParams = {
    cacheId: this.cacheId,
    callback: callback
  };
  cache.get(cacheParams, cacheHit, cacheMiss);
};

classes.prototype.cacheHit = function(cacheParams, doc) {
  cacheParams.callback(null, doc);
};

classes.prototype.cacheMiss = function(cacheParams) {

};