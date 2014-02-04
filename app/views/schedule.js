define(['jquery', 'backbone', 'handlebars', 'collections/oscar', 'views/scheduleSection', 'views/sectionPopup'],
function($,   Backbone, Handlebars, OscarCollection, ScheduleSection, SectionPopup) {
  var ScheduleView = Backbone.View.extend({
    el : '.schedule',
    events : {
      'mouseover div.sectionBox' : 'sectionBoxHover',
    },
    initialize : function() {
      this.bindEvents();
      this.color = new this.randomColor();
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
    remove : function(crns) {
      this.removeSections(crns);
      this.unbindEvents();
      this.$el.empty();
      this.stopListening();
      return this;
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
    renderedSections : [],
    addSection : function(targetEl) {
      var courseInfo = this.getCourseInfo(targetEl);
      //TODO - Generate random non-used colour
      courseInfo.color = this.color.next();
      var section = new ScheduleSection([], {courseInfo: courseInfo});
      section.render();
      this.renderedSections[courseInfo.crn + ''] = section;
    },
    /*
      Expecting either null/undefined or an array of CRN strings/numbers
      if null/undefined, remove all sections
      if array of CRN strings/numbers, remove specified CRNs
    */
    removeSections : function(crns) {
      if(typeof crns !== 'object') {
        //remove all sections
        this.renderedSections = [];
      } else {
        //remove just the specified crns
        for(var i = 0, l = crns.length; i < l; ++i) {
          delete this.renderedSections[crns[i]];
        }
      }
    },
    getCourseInfo : function(targetEl) {
      var crn = targetEl.getAttribute('data-crn');
      var where = targetEl.parentElement.parentElement.children[1].children[0].children;
      var courseInfo = {
        crn : crn,
        year: targetEl.getAttribute('data-year'),
        semester : targetEl.getAttribute('data-semester').toCapital(),
        department : targetEl.getAttribute('data-department').toCapital(),
        course : targetEl.getAttribute('data-course').toCapital(),
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
    randomColor : function() {
      var index = 0;
      var colorList = ['#C39953','#A17A74', '#6D9BC3', '#CD607E', '#AD6F69', '#AB92B3', '#B768A2', '#5DA493', '#A6A6A6', '#778BA5', '#5F8A8B'];
      return {
        next : function() {
          //If we've used every color assigned, start repeating colors
          if(index === colorList.length) {
            index = 0;
          }
          return colorList[index++];
        }
      };
    },
    sectionBoxHover : function(ev) {
      ev.preventDefault();
      ev.stopPropagation();
      //only show pop-up if Its not been triggered before, 
      //and target is inside the containing wrapper divs, not its child elms
      if(!$(ev.target).data('data-showing') && ev.target.className.match('sectionBox')) {
        ev.target.setAttribute('data-showing', true);
        //Self destructing View
        (new SectionPopup({user: this.user}, {crn: ev.target.getAttribute('data-crn'), el: ev.target})).render();
      }
    }
  });
  return ScheduleView;
});