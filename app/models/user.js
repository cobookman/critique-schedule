define(['backbone'], function(Backbone) {
  var User = Backbone.Model.extend({
    url :  '/app/api/user/cbookman3', //Change to /user as the backend takes care of login stuff
    newSchedule : function(scheduleObj) {
      var schedules = this.get("schedules");
      schedules.others.push(schedules.selected);
      schedules.selected = scheduleObj;
      this.set({'schedules' : schedules});
      this.sort();
      this.save();
    },
    changeSelectedSchedule : function(scheduleId) {
      var schedules = this.get("schedules");
      var indexOfNewlySelected = this.otherScheduleIndex(scheduleId);
      if(indexOfNewlySelected === -1) {
        return callback({"error" : "already selected schedule"});
      }
      var temp = schedules.selected;
      schedules.selected = schedules.others[indexOfNewlySelected];
      schedules.others[indexOfNewlySelected] = temp;
      this.set({'schedules' : schedules});
      this.sort();
      this.save();
    },
    otherScheduleIndex : function(scheduleId) {
      var schedules = this.get("schedules");
      for(var i = 0, l = schedules.others.length; i < l; ++i) {
        if(schedules.others[i].id === scheduleId) {
          return i;
        }
      }
      //In case the id isn't in schedules.others, we return -1
      return -1;
    },
    /*
      Sorts the others schedules by year - semester
      used an insertion sort as its probably already sorted
    */
    sort : function(order) {
      var schedules = this.get('schedules');
      //order is an optional param, default = descending
      if(typeof order ==='undefined') {
        order = 'descending';
      }
      switch(order.toLowerCase()) {
        case 'ascending' : order = true; break;
        case 'descending' : order = false; break;
        default: order = false; break;
      }
      for (var i=0, l = schedules.others.length; i < l; ++i) {
        var semester = semester2num(schedules.others[i].semester);
        var year = parseInt(schedules.others[i].year, 10);
        var schedule = schedules.others[i];
        var j = i - 1;
        var keeplooping = (j > -1);
        while(keeplooping) {
          var greaterYear, sameYear, greaterSemester;
          //written this way as I hate looking at nested ifs in nested loops
          if(j > -1) {
            var comparison = schedules.others[j];
            greaterYear = comparison.year > year;
            sameYear = parseInt(comparison.year,10) === year;
            greaterSemester = semester2num(comparison.semester) > semester;
          }
          //to sort in ascending (greaterYear.....) === true, descending === false
          if(j > -1 && order === (greaterYear || (sameYear && greaterSemester))) {
            schedules.others[j+1] = schedules.others[j];
            --j;
          } else {
            keeplooping = false;
          }
        }
        schedules.others[j+1] = schedule;
      }
      this.set({schedules: schedules});
      function semester2num(semesterStr) {
        switch(semesterStr.toLowerCase()) {
          case 'spring' : return 1;
          case 'summer' : return 2;
          case 'fall' : return 3;
          default : return -1;
        }
      }
    }
  });
  return User;
});