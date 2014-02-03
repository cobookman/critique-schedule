define([], function() {
  return {
    /* 
      objArr in the form of:
      [ 
        {year: 2013, semester: 'fall', ...}, 
        {year: 2013, semester: 'summer', ...}, 
        ...
      ]
      orderStr = 'ascending' || 'descending' || 'asc' || 'desc'
                if anything else, default of descending
    */
    sort : function(objArr, orderStr) {
      if(typeof orderStr === 'undefined') {
        orderStr = '';
      }
      var order  = this.isAscendingOrder(orderStr);
      for(var i =0, l = objArr.length; i < l; ++i) {
        var semester = this.semester2num(objArr[i].semester);
        var year = parseInt(objArr[i].year, 10);
        var lookingAt = objArr[i];
        var j = i - 1;
        var keeplooping = (j > -1);
        while(keeplooping) {
          var greaterYear, sameYear, greaterSemester, comparitor;
          //Written this way to avoid nested ifs in nested loops...ewy
          if(j > -1) {
            comparitor = objArr[j];
            greaterYear = comparitor.year > year;
            sameYear = (parseInt(comparitor.year, 10) === year);
            greaterSemester = (this.semester2num(comparitor.semester) > semester);
          }
          //order === true for, ascending false for descending
          if(j > -1 && order === (greaterYear || (sameYear && greaterSemester))) {
            objArr[j+1] = objArr[j];
            --j;
          } else {
            keeplooping = false;
          }
        }
        objArr[j+1] = lookingAt;
      }
      return objArr;
    },
    semester2num : function(semesterStr) {
      switch(semesterStr.toLowerCase()) {
        case 'spring' : return 1;
        case 'summer' : return 2;
        case 'fall' : return 3;
        default : return -1;
      }
    },
    isAscendingOrder : function(orderStr) {
      var order = false;
      switch(orderStr.toLowerCase()) {
        case 'ascending' : order = true; break;
        case 'descending' : order = false; break;
        case 'asc' : order = true; break;
        case 'desc' : order = false; break;
        default: order = false; break;
      }
      return order;
    }
  };
});