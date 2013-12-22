// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  // Kick off the application.
  require(["app", "router", 'views/nav', 'views/schedule', 'views/search'  ],
  function(app,    Router,   NavView,      ScheduleView,     SearchView) {
    //Get our views
    var nav = new NavView();
    nav.render();

    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();
    var search = new SearchView();
    app.router.on('route:search', function() {
        search.render();
    });
    app.router.on('route:login', function(username, password) {
        alert("In login");
    });
    app.router.on('route:course', function(department, number) {
        alert("IN COURSE CONTROLLER"); //CHECK
    });
    app.router.on('route:watchedcourses', function(username) {
        alert("IN WATCHED COURSES"); //CHECK
    });
    app.router.on('route:calendar', function(username, schedulename) {
        alert("IN CALENDAR");
    });
    app.router.on('route:schedule', function(schedulename) {
        alert("IN SCHEDULE"); //CHECK
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
            app.router.navigate(url, { trigger: true });
        }
    });

  });
});
