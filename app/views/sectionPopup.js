define(['jquery', 'backbone', 'handlebars'],
function($,   Backbone,  Handlebars) {
  var SectionPopup = Backbone.View.extend({
    initialize : function(models, options) {
      this.user = models.user;
      this.crn = options.crn;
      this.el = options.el;
      this.bindEvents();
    },
    bindEvents : function() {
      var that = this;
      $(this.el).on('mouseleave', function() { that.remove(); });
    },
    unbindEv: function() {
      $(this.el).off('mouseleave');
    },
    render : function() {
      this.el.innerHTML += '<div class="popup">HI WORLD!!!</div>';
    },
    remove : function() {
      $(this.el).find('.popup').remove();
      this.el.setAttribute('data-showing', false);
      // this.unbindEv();
    },
  });
  return SectionPopup;
});