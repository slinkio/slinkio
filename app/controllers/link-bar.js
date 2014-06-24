import Ember from 'ember';

var LinkBarController = Ember.ArrayController.extend({
	// Below is fixture data. Use contentBinding on the render to pull this data from the user model.
	content: [
		{
			name: "newegg.com",
			location: null
		},
		{
			name: "foodnetwork.com",
			location: null
		},
		{
			name: "espn.com",
			location: null
		},
		{
			name: "redlodge.com",
			location: null
		},
		{
			name: "giphy.com",
			location: null
		}
	]
});

export default LinkBarController;