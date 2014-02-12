define(['jquery', 'handlebars', 'backbone', 'foundation', 'queryString', 'views/schedule', 'views/searchResults', 'departmentList'],
function($,   Handlebars,   Backbone,   foundation,   queryString,   ScheduleView,     SearchResults,   DepartmentList) {
  var SearchView = Backbone.View.extend({
    el : '.site-content',
    events : {
    },
    initialize : function(models, options) {
      this.user = models.user;
      this.loadTemplates();
      this.user.bind('change', this.render, this);
    },
    remove : function() {
      if(this.scheduleView) { //Just in case the scheduleView dies and burns to death!!!
        this.scheduleView.remove();
      }
      if(this.searchResults) { //there might not be any search results
        this.searchResults.remove();
      }
      this.$el.empty();
      this.unbindEvents();
      this.stopListening();
      this.user.unbind("change", this.render);
      return this;
    },
    //TODO - Remove this once pre-cache of templates done
    loadTemplates : function() {
       if(typeof templates.search === 'undefined') {
        var searchHTML = document.getElementById('template/search').innerHTML;
        templates.search = Handlebars.compile(searchHTML);
      }
    },
    render : function() {
      //Load Search Template (schedule view attached on left hand side)
      this.$el.html(templates.search({'departments': DepartmentList}));
      this.scheduleView = new ScheduleView();
      this.scheduleView.render();
      this.bindEvents();
      //Initialize modal and form validation for search template
      //reflow not implemented for reveal or abide, but can initialize foundation just for our scope
      this.$el.foundation('reveal').foundation('abide');
      
    },
    runQuery : function(query) {
      if(query.length > 0) {
        this.removeOldResults();
        this.query = query;
        this.setInputValue(query);
        var schedules = this.user.get('schedules');
        this.searchResults = new SearchResults([], {
          query: query,
          year: schedules.selected.year,
          semester : schedules.selected.semester.toCapital()
        });
        this.searchResults.render();
      }
    },
    setInputValue : function(data) {
      $('.search').val(data);
    },
    getQuery : function(event) {
      var target = event.originalEvent.target;
      for(var i =0, l = target.length; i<l; ++i) {
        if(target[i].value && target[i].value.trim().length >0) {
          return target[i].value.trim();
        }
      }
    },
    runAdvancedQuery : function(ev) {
      //TODO - Have advanced query subject options include humanities and social sciences. 
      // (Also have it include global perspectives, us perspectives options?)
      ev.stopPropagation();
      ev.preventDefault();
      if(ev.type === 'valid') {
        var query = document.getElementById("advancedSearchQuery").value,
            level = document.getElementById("searchLevelSelect").value,
            subject = document.getElementById("searchSubjectSelect").value,
            gpaMax = document.getElementById("searchGPAMax").value,
            gpaMin = document.getElementById("searchGPAMin").value,
            professor = document.getElementById("searchProfessor").value;

        if(level) {
          query += " " + level;
        }
        if(subject) {
          query += " " + subject;// + " course"; <- for some reason introduces faulty results
        }
        if(gpaMax && gpaMin) {
          query += " with gpa from " + gpaMin + " to " + gpaMax;
        } else if(gpaMax) {
          query += " with gpa less than " + gpaMax;
        } else if(gpaMin) {
          query += " with gpa greater than " + gpaMin;
        }
        if(professor) {
          query += " taught by " + professor;
        }

        query = query.trim();
        this.closeModal();

        if (query.length === 0) return;
        this.setInputValue(query);
        $('.searchbar button:first').click();
      }
    },
    closeModal : function() {
       $('.reveal-modal').foundation('reveal','close');
    },
    urlString : function(query) {
      return encodeURIComponent(query);
    },
    removeOldResults : function() {
      if(typeof this.searchResults !== 'undefined') {
        this.searchResults.remove();
        this.searchResults = null;
      }
    },
    bindEvents : function() {
      var that = this;
      $('#advancedSearchModal > form').on('valid invalid submit', function(ev) { that.runAdvancedQuery(ev); });
    },
    unbindEvents : function() {
      $('#advancedSearchModal > form').off();
    }
  });
  return SearchView;
});