import Ember from 'ember';

var Router = Ember.Router.extend({
	location: SlinkioENV.locationType
});

Router.map(function () {
	this.resource('dashboard', { path: '/dash' });
	this.resource('feed');
});

export default Router;