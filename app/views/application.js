import Ember from 'ember';

var ApplicationView = Ember.View.extend({
	toggleMenuClass: function () {
		console.log('toggling');
		this.$().toggleClass("show-side-menu");
	}
});

export default ApplicationView;