define([], function() {
  return {
    year : function(year) {
      if(isNaN(year)) {
        return false;
      } else {
        return true;
      }
    },
    semester : function(semester) {
      var acceptable = ['spring', 'summer', 'fall'];
      if(acceptable.indexOf(semester.toLowerCase()) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  };
});
