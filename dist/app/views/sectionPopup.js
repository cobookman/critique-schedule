define(['jquery', 'backbone', 'templates'],
function($      ,  Backbone ,  templates) {
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
      var context = {};
      this.el.innerHTML += templates['schedule/section/popup'](context);
    },
    remove : function() {
      $(this.el).find('.popup').remove();
      this.el.setAttribute('data-showing', false);
      this.unbindEv();
    },
  });
  return SectionPopup;
});