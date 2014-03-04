var helpers = require("./_helpers.js");
var config = require("../../config.js");
var Cache = require('../cache.js');
var cheerio = require('cheerio');

var cache = new Cache('coursecatalog_core');


function coreCurriculum(area) {
  this.coreConfig = config.courseCatalog.core;
  this.urlEnding = null;
  this.cacheId = null;
  this.area = null;
  //If valid area, build url, and store the area
  for(var key in this.coreConfig.areas) {
    if(area === key) {
      this.url = this.coreConfig.urlRoot+this.coreConfig.areas[area];
      this.area = area;
      this.cacheId = "coreCurriculum." + area.toLowerCase();
    }
  }
}
coreCurriculum.prototype.get = function(callback) {
  if(this.area === null) {
   return callback({error: "not a valid area"}, null);
  }
  //Scope hack
  var that = this;
  var cacheMiss = function(cacheParams) { that.cacheMiss(cacheParams); };
  var cacheHit = function(cacheParams, doc) { that.cacheHit(cacheParams, doc); };
  
  var cacheParams = {
    cacheId: this.cacheId,
    callback: callback
  };
  cache.get(cacheParams, cacheHit, cacheMiss);
};

coreCurriculum.prototype.cacheHit = function(cacheParams, doc) {
  return cacheParams.callback(null, doc);
};

coreCurriculum.prototype.cacheMiss = function(cacheParams) {
  var that = this;
  helpers.getURL(this.url, function(err, data) {
    if(err) {
      cacheParams.callback(err, null);
    } else {
      var $ = cheerio.load(data);
      var output = that.process($, $(".pcourses"));
      if(output.length < 1) {
        cacheParams.callback({error: "could not parse html"}, null);
      } else { //HUZU - Webscraped!
        cacheParams.callback(null, output);
        cache.set(cacheParams.cacheId, output);
      }
    }
  });
};

coreCurriculum.prototype.process = function($, courseLists) {
  var output = [];
  for(var i = 0, il = courseLists.length; i < il; ++i) {
    var children = $(courseLists[i]).children();
    for(var j = 0, jl = children.length; j < jl; ++j) {
      var courseDetails = $(children[j]).text().trim();
      var notSpace = (courseDetails !== '&nbsp');
      var notEmpty = (courseDetails !== '');
      var notUndefined = (typeof courseDetails !== 'undefined');
      if(notUndefined && notEmpty && notSpace) {
          courseDetails = courseDetails.split(' ');
          output.push({
            "department" : courseDetails[0],
            "number"     : courseDetails[1]
          });
      }
    }
  }
  return output;
};

module.exports = coreCurriculum;