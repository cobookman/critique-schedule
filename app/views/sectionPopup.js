define(['jquery', 'backbone', 'handlebars'],
function($,   Backbone,  Handlebars) {
  var SectionPopup = Backbone.View.extend({
    initialize : function(models, options) {
      this.user = models.user;
      this.crn = options.crn;
      this.el = options.el;
      this.bindEvents();
      this.loadTemplate();
    },
    //TODO - TEMPORARY METHOD
    loadTemplate: function() {
      templates.sectionPopup = Handlebars.compile(document.getElementById('template/sectionPopup').innerHTML);
    },
    bindEvents : function() {
      var that = this;
      $(this.el).on('mouseleave', function() { that.remove(); });
    },
    unbindEv: function() {
      $(this.el).off('mouseleave');
    },
    render : function() {
      this.el.innerHTML += templates.sectionPopup();
    },
    remove : function() {
      $(this.el).find('.popup').remove();
      this.el.setAttribute('data-showing', false);
      this.unbindEv();
    },
  });
  return SectionPopup;
});