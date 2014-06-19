import Ember from 'ember';

var NavigationController = Ember.Controller.extend({
	actions: {
		toggleSideMenu: function () {
			this.toggleProperty('showingSideMenu');
		}
	}
});

export default NavigationController;