// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  // Kick off the application.
  require(["app", "router", 'views/nav', 'views/search', 'views/oscar', 'views/historicalgrades', 'views/calendar', 'models/user', 'libraries/validate', 'handlebars'],
  function(app,    Router,   NavView,    SearchView,      OscarView,     HistoricalGradeView,      CalendarView,     User        ,  validate,             handlebars) {
    //Get User Login Credentials
    var user = new User();
    user.fetch({
        success: function() {
            var nav = new NavView([], { user: user});
            nav.render();
        },
        failure : function() {
            /*
                TODO - if for whatever reason we can't login the user
                should use dummy object stored locally
            */
            alert("404: could not fetch user credentials");
        },
    });
    /*
        Even though the user model still might not have finished fetching, we 
        start rendering our view as the 'schedule' view and other views
        which use the user model, should bind their render method to the
        user model's resfresh event
    */
    app.router = new Router();
    //Create object to store our views in
    app.views = {
        current : null //the current view goes here
    };
    app.router.on('route:search', function(year, semester, query) {
        var m = { year : 2013, semester : 'fall' };
        if(typeof year !== 'undefined' && typeof semester !== 'undefined') {
            m.year = year;
            m.semester = semester;
        }
        app.views.current = new SearchView([], { year: m.year, semester: m.semester});
        app.views.current.render();
        
        /* If url included a query, run its query */
        if(typeof query !== 'undefined') {
             app.views.current.runQuery(decodeURIComponent(query));
        }
         /*
            On a search query event, 
                1) Stop form submission
                2) run query
                2) Change URL to /search?query=:query
        */
        $(document).on('submit', '.searchbar', function(ev) {
            ev.preventDefault();
            var query = app.views.current.getQuery(ev);
            app.views.current.runQuery(query);
            app.router.navigate(m.year + '/' + m.semester + '/search/' + app.views.current.urlString(query), {trigger: false});
        });


    });
    app.router.on('route:login', function(username, password) {
        window.location.href = 'https://login.gatech.edu/cas/login?service=https://critique.gatech.edu';
    });
    app.router.on('route:oscarSections', function(year, semester, department, course) {
        /*  Check that required parameters are given and valid */
        if(!validate.year(year) || !validate.semester(semester) || department.length < 1 || course.length < 1) {
            //TODO - Better error handling
            alert("404");
        }
        /*
            Build options for View
        */
        var options = { year : year, semester: semester, department: department, course : course };
        app.views.current = new OscarView([], options);
        app.views.current.render();
    });
    app.router.on('route:grades', function(department, course, profId) {
        app.views.current = new HistoricalGradeView({user : user}, {department: department, course : course, profId: profId});
        app.views.current.render();
    });
    app.router.on('route:watchedcourses', function(username) {
        alert("IN WATCHED COURSES"); //CHECK
    });
    app.router.on('route:calendar', function(username, schedulename) {
        app.views.current = new CalendarView({}, {username : username, schedulename : schedulename});
    });
    app.router.on('route:contact', function() {
        alert("Contact us!!");
    });
    app.router.on('route:about', function() {
        alert("About Us!!");
    });
    // Trigger the initial route and enable HTML5 History API support, set the
    // root folder to '/' by default.  Change in app.js.
    Backbone.history.start({ pushState: true, root: app.root });
    // Allow links to re-direct page
    $(document).on("click", "a[href^='/']", function(event) {
      if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
        event.preventDefault();
        var url = $(event.currentTarget).attr("href").replace(/^\//, "");
        //Route to only new url paths, only issue with pages such-as '/search'
        if(Backbone.history.fragment !== url) {
          if(app.views.current && app.views.current.remove) {
              app.views.current.remove();
          }
          app.router.navigate(url, { trigger: true });
          /*
              Sometimes when rendering a new page, 
              the document is not scrolled to the top.
              this ensures that all navigation brings the user
              to the top of the page
          */
          $("html,body").scrollTop(0);
        }
      }
    });

  });
});

/* Add string capitolize method */
String.prototype.toCapital = function() {
    return this.toLowerCase().replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};


