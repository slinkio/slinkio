import Ember from 'ember';
import convert from '../utils/temperature-convert';

export default Ember.Handlebars.makeBoundHelper(function (val, pref) {
	return convert(val, pref);
});