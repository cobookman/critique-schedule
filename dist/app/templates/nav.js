/*
  This view is for all navigational items
  The following nav bars are chosen throug zurb foundation's 
  CSS queries
    -the top bar (for bigger screens)
    -The mobile slide out menu (For smaller screens)
*/
define(['jquery', 'handlebars', 'foundation', 'backbone'],
function($,   Handlebars,   foundation,   Backbone) {
  alert("Included");
  var NavView = Backbone.View.extend({
    className : 'NavView',
    render : function() {
      //TODO - Implement login system
      var user ={
        schedules : {
          selected : {
            semester : 'Fall',
            year : 2013,
            name : "Colin's Schedule",
            id : 'colinsschedule'
          },
          others : [
            {name: "Temp", year : 2013, semester : 'Spring', id: 'temp'},
            {name: "Temp2", year : 2013, semester : 'Spring', id: 'temp2' },
          ]
        },
        departments : [
          {code : 'math', name: "Mathamatics"},
          {code : 'ece', name: "Electrical and Computer Engineering"}
        ],
        user : {
          name : 'cbookman3'
        }
      };
      //TODO - Should be done on page load as the templates would 
      //be pre-compiled with handlebars
      var topBarHTML = document.getElementById('template/top-bar').innerHTML;
      var leftOffCanvasMenuHTML = document.getElementById('template/left-off-canvas-menu').innerHTML;
      var scheduleHTML = document.getElementById('template/schedule').innerHTML;
      var indexHTML = document.getElementById('template/index').innerHTML;
      templates.topBar = Handlebars.compile(topBarHTML);
      templates.leftOffCanvasMenu = Handlebars.compile(leftOffCanvasMenuHTML);
      templates.index = indexHTML;

      $('.top-bar').html(templates.topBar(user));
      $('.left-off-canvas-menu').html(templates.leftOffCanvasMenu(user));
      $('.site-content').html(templates.index);
    }
  });
  return NavView;
});

//   templates.navigation = Handlebars.compile(document.getElementById('navigation-template').text);
//   var context = {
//     schedules : {
//       selected : {
//         semester : 'Fall',
//         year : 2013,
//         name : "Colin's Schedule",
//         id : 'colinsschedule'
//       },
//       others : [
//         {name: "Temp", year : 2013, semester : 'Spring', id: 'temp'},
//         {name: "Temp2", year : 2013, semester : 'Spring', id: 'temp2' },
//       ]
//     },
//     departments : [
//       {url : '/course/math', name: "Mathamatics"},
//       {url : '/course/ece', name: "Electrical and Computer Engineering"}
//     ],
//     user : {
//       name : 'cbookman3'
//     }
//   };
//   $(document).foundation();
//   return {
//     render : function() {
//       $('#main').html(templates.navigation(context));
//     }
//   };
// });