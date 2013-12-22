define(['backbone'], function(Backbone) {
	var User = Backbone.Model.extend({
		urlRoot :  '/app/api/user',
	});
	return User;
});