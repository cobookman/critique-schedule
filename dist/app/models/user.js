define(['backbone', 'libraries/yearSemesterSort'], function(Backbone, yearSemesterSort) {
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
      Sorts the others schedules by year - semester in descending order
    */
    sort : function(order) {
      var schedules = this.get('schedules');
      schedules.others = yearSemesterSort.sort(schedules.others, 'descending');
      this.set({schedules: schedules});
    }
  });
  return User;
});