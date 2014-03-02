define(['handlebars'], function(Handlebars) {

this["templates"] = this["templates"] || {};

this["templates"]["grades/table/row"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <td><a href=\"/grades/";
  if (stack1 = helpers.department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.department); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.course) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.course); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.profId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.profId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.mean)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.stddev)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['A'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['B'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['C'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['D'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['F'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['W'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%</td>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <td>";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.year); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (stack1 = helpers.semester) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.semester); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (stack1 = helpers.section) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.section); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (stack1 = helpers.gpa) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.gpa); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n    <td>";
  if (stack1 = helpers['A']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['A']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</td>\n    <td>";
  if (stack1 = helpers['B']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['B']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</td>\n    <td>";
  if (stack1 = helpers['C']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['C']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</td>\n    <td>";
  if (stack1 = helpers['D']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['D']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</td>\n    <td>";
  if (stack1 = helpers['F']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['F']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</td>\n    <td>";
  if (stack1 = helpers['W']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['W']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "%</td>\n    <td>";
  if (stack1 = helpers.size) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.size); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  ";
  return buffer;
  }

  buffer += "<tr>\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.statistics), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</tr>\n";
  return buffer;
  });

this["templates"]["grades/table/wrapper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n        <th></th>\n        <th>GPA</th>\n        <th>Median</th>\n        <th>σ</th>\n        <th>A</th>\n        <th>B</th>\n        <th>C</th>\n        <th>D</th>\n        <th>F</th>\n        <th>W</th>\n      ";
  }

function program3(depth0,data) {
  
  
  return "\n        <th>Year</th>\n        <th>Semester</th>\n        <th>Section</th>\n        <td>GPA</td>\n        <td>A</td>\n        <td>B</td>\n        <td>C</td>\n        <td>D</td>\n        <td>F</td>\n        <td>W</td>\n        <td>Size</td>\n      ";
  }

  buffer += "<!--\n  Must force the table to center, as while div is centered, the table does not take up the full width\n-->\n<table style=\"margin: 0 auto;\">\n  <thead>\n    <tr>\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.isMultipleProfs), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </tr>\n  </thead>\n  <tbody>\n  </tbody>\n</table>\n";
  return buffer;
  });

this["templates"]["grades/wrapper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  if (stack1 = helpers.prof) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prof); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.department), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program2(depth0,data) {
  
  
  return ", ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  if (stack1 = helpers.department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.department); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  if (stack1 = helpers.course) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.course); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

  buffer += "<!--\n  the grade-tables have a max width of 750px...which messes up centering on larger \n  screens. therefore I just forced all the cells to never be larger than\n  the table \n-->\n<div class=\"row collapse\">\n  <div class=\"small-12 medium-9 large-8\"  style=\"margin: 0 auto; max-width: 750px;\">\n    <h3>Grades For: \n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prof), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.department), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.course), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h3>\n  </div>\n</div>\n<div class=\"row collapse\">\n  <div class=\"medium-12 large-8\" id=\"grade-graphs\" style=\"margin: 0 auto; max-width: 750px; height: 300px;\">\n  <!-- Graphs will render here -->\n  </div>\n</div>\n<div class=\"row collapse\">\n  <div class=\"medium-12 large-8 grade-tables\" style=\"margin: 0 auto;\">\n  <!-- Tabular grade data generated here -->\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["nav/leftOffCanvas"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"off-canvas-list\">\n  <li><label>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label></li>\n  <li class=\"has-form\">\n  <form action=\"search\" method=\"get\" class=\"searchbar\">\n    <div class=\"row collapse\">\n      <div class=\"small-9 columns\">\n        <input type=\"text\" placeholder=\"Search\" class=\"search\" name=\"query\"></input>\n      </div>\n      <div class=\"small-3 columns\">\n        <button type=\"submit\" class=\"button postfix\">Search</button>\n      </div>\n    </div>\n  </form>\n  </li>\n  <li><a href=\"/watchedcourses/";
  if (stack2 = helpers.username) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.username); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Watched Courses</a></li>\n  <li><a href=\"/calendar/";
  if (stack2 = helpers.username) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.username); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Calendar</a></li>\n  <li><a href=\"/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.semester)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Course List</a></li>\n\n  <li><label>Settings</label></li>\n  <li><a href=\"https://login.gatech.edu/cas/login?service=https://critique.gatech.edu\">Login</a></li>\n  <li><a href=\"#changeSchedule\">Change Schedule</a></li>\n  <li><a href=\"/contact\">Contact Us</a></li>\n  <li><a href=\"/about\">About Us</a></li>\n</ul>";
  return buffer;
  });

this["templates"]["nav/topbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>\n          <a class=\"left changeSchedule\" href=\"#changeSchedule\" data-schedule=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.semester) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.semester); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.year); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n          <a class=\"right deleteSchedule\" href=\"#deleteSchedule\" data-schedule=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">X</a>\n        </li>\n        ";
  return buffer;
  }

  buffer += "<ul class=\"title-area\">\n  <li class=\"name\">\n    <h1><a href=\"/\">Course Scheduler</a></h1>\n  </li>\n</ul>\n<section class=\"top-bar-section\"> \n  <ul class=\"right\">\n    <li class=\"divider\"></li>\n    <li class=\"has-dropdown not-click schedulePicker\">\n      <a href=\"#\" data-schedule=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.semester)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n      <ul class=\"dropdown\">\n        <li><a href=\"#newSchedule\" data-schedule=\"\" data-reveal-id=\"newScheduleModal\">New</a></li>\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.others), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </ul>\n    </li>\n\n    <li class=\"divider\"></li>\n    <li><a href=\"/watchedcourses/";
  if (stack2 = helpers.username) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.username); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Watched Courses</a></li>\n\n    <li class=\"divider\"></li>\n    <li><a href=\"/calendar/";
  if (stack2 = helpers.username) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.username); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Calendar</a></li>\n\n    <li class=\"divider\"></li>\n    <li>\n      <a href=\"/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.schedules)),stack1 == null || stack1 === false ? stack1 : stack1.selected)),stack1 == null || stack1 === false ? stack1 : stack1.semester)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/departments\">Departments</a>\n    </li>\n\n    <li class=\"active\"><a href=\"https://login.gatech.edu/cas/login?service=https://critique.gatech.edu\">Login</a></li>\n  </ul> <!-- Left Nav Section --> \n  <ul class=\"left\">\n  </ul>\n</section>\n\n<div id=\"newScheduleModal\" class=\"reveal-modal\" data-reveal>\n  <h2>Create a new schedule</h2>\n  <form data-abide>\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <label for=\"newScheduleName\">Name of Schedule</label>\n        <input type=\"text\" name=\"name\" id=\"newScheduleName\" placeholder=\"gburdel's awesome schedule\" required pattern=\"alpha_numeric\">\n        <small class=\"error\">Schedule name is a required field, and must be an alpha numeric string.</small>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"large-6 columns\">\n        <label for=\"newSemesterSelect\">Semester</label>\n        <select name=\"semester\" id=\"newSemesterSelect\" required pattern=\"Fall|Spring|Summer\">\n          <option value=\"Fall\">Fall</option>\n          <option value=\"Spring\">Spring</option>\n          <option value=\"Summer\">Summer</option>\n        </select>\n        <small class=\"error\">Please choose one of the following:</small>\n      </div>\n      <div class=\"large-6 columns\">\n        <label for=\"newYearSelect\">Year</label>\n        <select name=\"year\" id=\"newYearSelect\" required pattern=\"\\d{4}\">\n          <option value=\"2014\">2014</option>\n          <option value=\"2013\">2013</option>\n          <option value=\"2012\">2012</option>\n        </select>\n        <small class=\"error\">Please choose one of the following:</small>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"large-12 columns\">\n        <button type=\"submit\" name=\"submit\" class=\"button createNewSchedule\">Create</button>\n      </div>\n    </div>\n  </form>\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>";
  return buffer;
  });

this["templates"]["schedule/section/box"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div style=\"position:relative;\"><!-- Hack to make relative width work for webkit and firefox browsers -->\n  <div class=\"sectionBox\" style=\"height: ";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.height); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "; background: ";
  if (stack1 = helpers.color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.color); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ";margin-top: ";
  if (stack1 = helpers.marginTop) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.marginTop); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\" data-crn=\"";
  if (stack1 = helpers.crn) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.crn); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <b>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</b>\n  </div>\n</div>\n";
  return buffer;
  });

this["templates"]["schedule/section/popup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"joyride-tip-guide popup\">\n  <div class=\"nub\">\n    <span class=\"joyride-nub top\"></span>\n  </div>\n  <!-- Hack: alows for mouse curser to move down to the\n       popup w/o having to go through the tiny up arrow -->\n  <div style=\"width:150px; height:10px; margin-top:-20px; overflow:hide;\">\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n  </div>\n  <div data-showing=\"false\" class=\"joyride-content-wrapper\" style=\"margin-top:20px;\">\n    <ul>\n      <li>CRN: ";
  if (stack1 = helpers.crn) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.crn); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n      <li><td>Prof: ";
  if (stack1 = helpers.prof) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prof); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n      <li><td>Time: ";
  if (stack1 = helpers.time) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.time); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n      <li><a href=\"/";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.year); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.semester) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.semester); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.department); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.number) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.number); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Other Sections</a></li>\n      <li><button data-crn=\"";
  if (stack1 = helpers.crn) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.crn); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"button small alert removeSection\">Remove</button></li>\n    </ul>\n  </div>\n</div>\n";
  return buffer;
  });

this["templates"]["schedule/table"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<table class=\"schedule-data small-12 columns\">\n  <thead>\n    <tr>\n      <th></th>\n      <th>Mon</th>\n      <th>Tue</th>\n      <th>Wed</th>\n      <th>Thu</th>\n      <th>Fri</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr><td>7 am</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>8 am</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>9 am</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>10 am</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>11 am</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>12 pm</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>1 pm</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>2 pm</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>3 pm</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>4 pm</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>5 pm</td><td></td><td></td><td></td><td></td><td></td></tr>\n    <tr><td>6 pm</td><td></td><td></td><td></td><td></td><td></td></tr>\n  </tbody>\n  </div>\n</table>";
  });

this["templates"]["search/result"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          ";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n          <i>No Description for course given on Oscar</i>\n        ";
  }

function program5(depth0,data) {
  
  var buffer = "";
  buffer += " "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.mean)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n              N/A\n            ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.stddev)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " \n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n            ";
  return buffer;
  }

  buffer += "<div class=\"row collapse\">\n  <div class=\"row collapse\">\n    <div class=\"small-12 large-8 columns\">\n      <h5><b><a href=\"/";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.year); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.semester) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.semester); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.department)),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.number); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.department)),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.number); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + " - ";
  if (stack2 = helpers.course) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.course); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "<a/></b></h5>\n      <p>\n        ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.description), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </p>\n      ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.core_areas), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n    <div class=\"large-4 columns hide-for-small-up show-for-large-up\">\n      <table class=\"table-condensed\" align=\"right\">\n      <thead>\n        <tr>\n          <th>μ</th>\n          <th>σ</th> \n          <th>Q<sub>1</sub></th>\n          <th>Q<sub>2</sub></th>\n          <th>Q<sub>3</sub></th>\n          <th>Credits</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.mean), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </td>\n          <td>\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.stddev), {hash:{},inverse:self.program(9, program9, data),fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </td>\n          <td>\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q1), {hash:{},inverse:self.program(9, program9, data),fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </td>\n          <td>\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q2), {hash:{},inverse:self.program(9, program9, data),fn:self.program(15, program15, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </td>\n          <td>\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.grade)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q3), {hash:{},inverse:self.program(9, program9, data),fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </td>\n          <td>";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.creditHours), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n        </tr>\n      </tbody>\n      </table>\n      <div class=\"row collapse right hide-for-small-only\">\n        <a href=\"/grades/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.department)),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.number); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"small button secondary viewGrades\">Grades</a>\n        <a href=\"/";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.year); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.semester) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.semester); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.department)),stack1 == null || stack1 === false ? stack1 : stack1.code)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.number) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.number); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"small button secondary viewSections\">Sections</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row grey-line\"></div>";
  return buffer;
  });

this["templates"]["search/wrapper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <option value=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n            ";
  return buffer;
  }

  buffer += "<div class=\"small-12 large-8 columns main-content\">\n  <div class=\"row collapse\">\n    <h3>What kind of class are you looking for</h3>\n    <form action=\"search\" method=\"get\" class=\"searchbar\">\n      <div class=\"row collapse\">\n        <div class=\"small-9 medium-10 columns\">\n          <input name=\"query\" type=\"text\" placeholder=\"E.g: Differential Equations\" tabindex=\"1\" class=\"search\" autofocus>\n        </div>\n        <div class=\"small-2 medium-1 columns\">\n          <button type=\"submit\" class=\"button postfix\" style=\"border-right:1px solid; border-color:rgba(255,255,255,0.5);\">Search</button>\n        </div>\n        <div class=\"small-1 medium-1 columns\">\n          <button class=\"button postfix\" style=\"width:25px;\" data-reveal-id=\"advancedSearchModal\">&#9660;</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"row collapse searchResults\">\n  </div>\n</div>\n\n<div class=\"large-4 columns hide-for-small-up show-for-large-up fixed-top-right\">\n    <h3>Current Schedule</h3>\n    <div class=\"schedule\">\n    </div>\n</div>\n\n<div id=\"advancedSearchModal\" class=\"reveal-modal\" data-reveal>\n  <h2>Advanced Search</h2>\n    <form action=\"search\" method=\"get\" class=\"advancedsearch\" data-abide>\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          <input name=\"query\" id=\"advancedSearchQuery\" type=\"text\" placeholder=\"E.g: Differential Equations\" class=\"search\">\n        </div>\n      </div>\n      <h5>Optional settings</h5>\n      <div class=\"row\">\n        <div class=\"large-2 columns\">\n         <label for=\"searchLevelSelect\">Level</label>\n         <input name=\"level\" id=\"searchLevelSelect\" type=\"text\" placeholder=\"E.g: 45XX, 3XXX\" pattern=\"^(?=^.{4}$)[1-5]\\d*[xX]+$\">\n         <small class=\"error\">Please enter a four digit code such as: 5XXX, 45XX, 3XXX, etc.</small>\n        </div>\n        <div class=\"large-3 columns\">\n          <label for=\"searchSubjectSelect\">Subject</label>\n          <select name=\"subject\" id=\"searchSubjectSelect\">\n            <option value=\"\">Any subject</option>\n            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.departments), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </select>\n        </div>\n        <div class=\"large-4 columns\">\n          <div class=\"row\">\n            <div class=\"small-6 columns\">\n              <label for=\"searchGPAMin\">GPA &ge;</label>\n              <input name=\"gpaMin\" id=\"searchGPAMin\" type=\"text\" placeholder=\"E.g: 2.0\" pattern=\"^[0-3](\\.?\\d+)?|4(\\.0+)?$\">\n              <small class=\"error\">Please enter a gpa &ge; 0 and &le; 4.0.</small>\n            </div>\n            <div class=\"small-6 columns\">\n              <label for=\"searchGPAMax\">GPA &le;</label>\n              <input name=\"gpaMax\" id=\"searchGPAMax\" type=\"text\" placeholder=\"E.g: 4.0\" pattern=\"^[0-3](\\.\\d+)?|4(\\.0+)?$\">\n              <small class=\"error\">Please enter a gpa &ge; 0 and &le; 4.0.</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"large-3 columns\">\n          <label for=\"searchProfessor\">Professor</label>\n          <input name=\"professor\" id=\"searchProfessor\" type=\"text\" placeholder=\"E.g: Morley\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"large-12 columns\">\n          <button type=\"submit\" name=\"submit\" class=\"button\">Search</button>\n        </div>\n      </div>\n    </form>\n  <a class=\"close-reveal-modal\">&#215;</a>\n</div>";
  return buffer;
  });

this["templates"]["sections/averageGpa"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "μ: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.mean)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\nσ:"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.stddev)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " \nQ<sub>2</sub>: "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1.gpa)),stack1 == null || stack1 === false ? stack1 : stack1.q2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  });

this["templates"]["sections/percentageGpa"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "A: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['A'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\nB: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['B'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\nC: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['C'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\nD: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['D'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\nF: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['F'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%\nW: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.statistics)),stack1 == null || stack1 === false ? stack1 : stack1['W'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "%";
  return buffer;
  });

this["templates"]["sections/seats"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"no-bullet right\">\n  <li>Actual: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.seats)),stack1 == null || stack1 === false ? stack1 : stack1.actual)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.seats)),stack1 == null || stack1 === false ? stack1 : stack1.capacity)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n  <li>Waitlist: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waitlist)),stack1 == null || stack1 === false ? stack1 : stack1.actual)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.waitlist)),stack1 == null || stack1 === false ? stack1 : stack1.capacity)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n</ul>\n";
  return buffer;
  });

this["templates"]["sections/section"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <div class=\"row section\">\n      <div class=\"small-12 medium-9 columns\">\n        <div class=\"row collapse\">\n          <div class=\"small-3 columns\">\n            <button data-crn=\"";
  if (stack1 = helpers.crn) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.crn); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-year=\""
    + escapeExpression(((stack1 = (depth1 && depth1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-semester=\""
    + escapeExpression(((stack1 = (depth1 && depth1.semester)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-department=\""
    + escapeExpression(((stack1 = (depth1 && depth1.department)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-course=\""
    + escapeExpression(((stack1 = (depth1 && depth1.course)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"tiny secondary addSection\">Add Section: ";
  if (stack2 = helpers.section) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.section); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</button>\n          </div>\n          <div class=\"small-9 columns\" style=\"font-size:0.7rem;\">\n            <ul class=\"no-bullet\">\n            ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.where), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"medium-3 columns hide-for-small-only ";
  if (stack2 = helpers.crn) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.crn); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + " seatInfo\">\n      </div>\n    </div>\n  ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.day), {hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <li data-day=\"";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.day); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-location=\"";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.location); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-time=\"";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.time), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (stack1 = helpers.day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.day); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.time), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.location); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n              ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  buffer += escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "";
  buffer += " "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + " - ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n                <li data-day=\"TBA\">TBA</li>\n              ";
  }

  buffer += "<div class=\"row collapse sectionProf\">\n  <div class=\"medium-9 columns\">\n    <h6><strong>";
  if (stack1 = helpers.prof) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.prof); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong><span class=\"";
  if (stack1 = helpers.profId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.profId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " gpa average\"></span></h6>\n  </div>\n  <div class=\"medium-3 columns\">\n    <a id=\"";
  if (stack1 = helpers.profId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.profId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "-historical-grades\" href=\"/grades/";
  if (stack1 = helpers.department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.department); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.course) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.course); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.profId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.profId); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"tiny button secondary right historical-grades hide\">Historical Grades</a>\n  </div>\n</div>\n<div class=\"row collapse section-wrapper\" >\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["templates"]["sections/wrapper"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"medium-6 columns main-content\">\n  <div class=\"row collapse\">\n    <h3>\n      <a id=\"class-statistics-historical-grades\" href=\"/grades/";
  if (stack1 = helpers.department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.department); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.course) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.course); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\" title=\"";
  if (stack1 = helpers.department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.department); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.course) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.course); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " Grades\">\n        ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.year); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.semester) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.semester); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + ": ";
  if (stack1 = helpers.department) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.department); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.course) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.course); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        <span class=\"class-statistics gpa average\"></span>\n      </a>\n    </h3>\n  </div>\n  <div class=\"row collapse oscar-data\">\n    <!-- Departments, Sections, or Courses here -->\n    <h3>Parsing Oscar</h3>\n    <h4>this can take a few seconds</h4>\n    <img src=\"/app/img/loading.gif\">\n\n  </div>\n</div>\n\n<div class=\"medium-6 columns hide-for-small-up show-for-medium-up fixed-top-right\">\n    <h3>Current Schedule</h3>\n    <div class=\"row collapse schedule\">\n    </div>\n</div>\n";
  return buffer;
  });

return this["templates"];

});