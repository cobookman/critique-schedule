// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  // Kick off the application.
  require(["app", "router", 'views/nav', 'views/search', 'models/user' ],
  function(app,    Router,   NavView,    SearchView,      User) {
    //Get User Login Credentials
    var user = new User({id: 'cbookman3'});
    user.fetch({
        success: function() {
            var nav = new NavView({model: user});
            nav.render({});
        }
    });
    app.router = new Router();
    //Create object to store our views in
    app.views = {};
    app.router.on('route:search', function(year, semester, query) {
        var m = {
            year : 2013,
            semester : 'fall'
        };
        if(typeof year !== 'undefined' && typeof semester !== 'undefined') {
            m.year = year;
            m.semester = semester;
        }

        app.views.current = new SearchView([], { year: m.year, semester: m.semester});
        app.views.current.render();
        /*
            If Url included the year/semester
            we must override the currently selected schedule
        */
       
        /*
            If url included a query, run its query
        */
        if(typeof query !== 'undefined') {
             app.views.current.runQuery(decodeURIComponent(query));
        }
         /*
            On a search query event, 
                1) Stop form submission
                2) run query
                2) Change URL to /search?query=:query
        */
        $('.searchbar').on('submit', function(ev) {
            ev.preventDefault();
            var query = app.views.current.getQuery();
            app.views.current.runQuery(query);
            app.router.navigate(m.year + '/' + m.semester + '/search/' + app.views.current.urlString(query), {trigger: false});
        });
    });
    app.router.on('route:login', function(username, password) {
        window.location.href = 'https://login.gatech.edu/cas/login';
    });
    app.router.on('route:course', function(department, number) {
        alert("IN COURSE CONTROLLER"); //CHECK
    });
    app.router.on('route:watchedcourses', function(username) {
        views.search.remove();
        alert("IN WATCHED COURSES"); //CHECK
    });
    app.router.on('route:calendar', function(username, schedulename) {
        alert("IN CALENDAR");
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
            //Remove old route's view
            if(app.views.current && app.views.current.remove) {
                app.views.current.remove();
            }
            //Route to new route
            app.router.navigate(url, { trigger: true });
        }
    });

  });
});
