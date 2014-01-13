define(['jquery', 'backbone', 'handlebars', 'collections/oscar'],
function($,   Backbone, Handlebars, OscarCollection) {
  var ScheduleView = Backbone.View.extend({
    el : '.schedule',
    initialize : function() {
      this.bindEvents();
    },
    bindEvents : function() {
      var that = this;
      $(document.body).on('click', '.addSection' , function(ev){
        ev.preventDefault();
        ev.stopPropagation();
        that.addSection(ev.target);
      });
    },
    unbindEvents : function () {
      $(document.body).off('click', '.addSection');
    },
    render : function() {
        if(typeof templates.schedule === 'undefined') {
            templates.schedule = document.getElementById('template/schedule').innerHTML;
        }
        if(typeof templates.sectionBox === 'undefined') {
          templates.sectionBox = Handlebars.compile(document.getElementById('template/sectionBox').innerHTML);
        }
        this.$el.html(templates.schedule);
    },
    addSection : function(targetEl) {
      var courseInfo = this.getCourseInfo(targetEl);
      this.drawSection(courseInfo);
    },
    getCourseInfo : function(targetEl) {
      var crn = targetEl.getAttribute('data-crn');
      var where = targetEl.parentElement.parentElement.children[1].children[0].children;
      var courseInfo = {
        crn : crn,
        year: targetEl.getAttribute('data-year'),
        semester : targetEl.getAttribute('data-semester'),
        department : targetEl.getAttribute('data-department'),
        course : targetEl.getAttribute('data-course'),
        where : []
      };
      for(var i = 0, l = where.length; i < l; ++i) {
        var day = where[i].getAttribute('data-day');
        if(day.trim().toUpperCase() !== 'TBA') {
          courseInfo.where.push({
             time: where[i].getAttribute('data-time').trim().split(' '),
             location: where[i].getAttribute('data-location').trim(),
             days : where[i].getAttribute('data-day').trim()
          });
        }
      }
      return courseInfo;
    },
    sectionColors : [ '#2E16B1', '#AD009F', '#01939A', '#FFCB00', '#8070D8', '#D660CC', '#5DC8CD', '#FFE373' ],
    drawSection : function(courseInfo) {
      var scheduleRows = this.$el.find('table.schedule-data > tbody > tr');
      var color = this.sectionColors.pop();
      for(var w = 0, whereLen = courseInfo.where.length; w < whereLen; ++w){
        var days = courseInfo.where[w].days;
        var meetingTime = courseInfo.where[w].time;
        //Can't draw TBA courses in schedule and courses without an end time
        if(meetingTime.length !==2 || meetingTime.indexOf('TBA') >=0 || meetingTime.indexOf('tba') >=0) {
          break;
        }
        //Fix the time to display more 'prettely'
        meetingTime = this.fixTime(meetingTime);
        //get the row of where the box should be placed
        var row = this.getHour(meetingTime[0]) - 7;
        //If the time is xx:30, we need to start the box half down the cell...etc
        var relativeMarginTop = this.calcOffset(this.getMinute(meetingTime[0]));
        var duration = this.getDuration(meetingTime);
        //draw the 'box' for each day
        for(var d = 0, dayLen = days.length; d < dayLen; ++d) {
          var column = this.day2columnNumber(days[d]);
          var html = templates.sectionBox({
            crn : courseInfo.crn,
            marginTop : relativeMarginTop,
            height : duration,
            color : color,
            name : courseInfo.department + ' ' + courseInfo.course
          });
          scheduleRows[row].children[column].innerHTML += html;
        }
      }
    },
    getMinute : function(timeStr) {
      var minutes;
      try {
        minutes = parseInt(timeStr.split(':')[1], 10);
      } catch(e) {
        throw new Error("timeStr not in format of: xx:xx");
      }
      return minutes;
    },
    calcOffset: function(minutes) {
      return this.hours2Height(this.min2Hour(parseInt(minutes, 10)));
    },
    min2Hour : function(minutes) {
      return (minutes/60);
    },
    day2columnNumber : function(dayAbreviation) {
      //days[d] can be equal to ['M','T','W','R','F']
      var day;
      switch(dayAbreviation.toUpperCase()) {
        case 'M' : day = 1; break;
        case 'T' : day = 2; break;
        case 'W' : day = 3; break;
        case 'R' : day = 4; break;
        case 'F' : day = 5; break;
        default :
          day = -1;
          throw new Error("Day Abbrevation of: " + dayAbreviation + " is not valid.  It needs to be in M,T,W,R,F");
      }
      return day;
    },
    getHour : function(timeStr) {
      var hour = timeStr.substring(0, timeStr.indexOf(':'));
      if(hour < 0 || hour > 24) {
        throw new Error("Hour of: " + hour + " is not a valid hour in the 24hour clock");
      }
      return hour;
    },
    getDuration : function(meetingTimeArr) {
      if(meetingTimeArr.length !== 2) {
        throw new Error("Expected an array of strings containing two times in 24 hour format");
      }
      //Using 1/1/2014 as a place holder, could be any random date
      var startTime = new Date('1/1/2014 ' + meetingTimeArr[0]);
      var endTime = new Date('1/1/2014 ' + meetingTimeArr[1]);
      var timeDifference = Math.abs(endTime - startTime);
      return this.hours2Height(timeDifference/1000/60/60);
    },
    /*
      Fixes the time for display purposes.
      can be given one time, or an array of times in 
      string format
    */
    fixTime : function(times) {
      //If just one time
      if(typeof times === 'string') {
        return fix(times);
      }
      //If given array of times
      for(var i = 0, l = times.length; i < l; ++i) {
        times[i] = fix(times[i]);
      }
      return times;
    

      function fix(timeStr) {
        var timeArr = timeStr.split(':');
        var hours = parseInt(timeArr[0], 10);
        var mins = parseInt(timeArr[1], 10);
        if(mins > 35) {
          mins = Math.round(mins/10)*10;
        } else {
          mins = Math.floor(mins/10)*10;
        }
        if(mins >= 60) {
            mins = 0; ++hours;
        }
        hours = num2Str(hours);
        mins = num2Str(mins);
        return hours +':' + mins;
      }
      function num2Str(num) {
        num = num.toString(10);
        if(num.length < 2) {
          num = '0' + num;
        }
        return num;
      }
    },
    /*
      Table rows = 40px, 1 table row = 1 hour
    */
    hours2Height : function(hours) {
      return (hours * 40) + 'px';
    },
    remove : function() {
      this.unbindEvents();
      this.$el.empty();
      this.stopListening();
      return this;
    }
  });
  return ScheduleView;
});