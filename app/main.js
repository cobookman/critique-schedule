// Break out the application running from the configuration definition to
// assist with testing.
require(["config"], function() {
  // Kick off the application.
  require(["app", "router", 'views/nav', 'views/schedule', 'views/search', 'models/user' ],
  function(app,    Router,   NavView,      ScheduleView,     SearchView, User) {
    //Get our views
    var user = new User({id: 'cbookman3'});
    user.fetch({
        success: function() {
            var nav = new NavView({model: user});
            nav.render({});
        }
    });

    

    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();
    var search = new SearchView();
    app.router.on('route:search', function() {
        search.render();
        /*
            On a search query event, add GET params
        */
        $('.searchbar').on('submit', function(ev) {
            search.runQuery(ev);
            var query = search.getQueryString();
            app.router.navigate('search'+query, {trigger: false});
        });
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
