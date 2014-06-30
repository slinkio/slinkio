import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function (text, title, all) {
	if(!title) {
		return (all) ? text.toUpperCase() : text.charAt(0).toUpperCase() + text.slice(1);
	}
	return text.split(" ").map(function (str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}).join(" ");
});
