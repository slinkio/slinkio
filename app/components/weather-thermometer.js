import Ember from 'ember';
import { percentFromRange, toNearest } from './../utils/extended-math';

var WeatherThermometerComponent = Ember.Component.extend({
	tagName: 'img',
	classNames: [ 'weather-thermometer' ],
	// Bind properties to view's DOM attributes
	attributeBindings: [ 'src', 'alt' ],

	src: function () {
		var range = {
			// Set the range 0-100F in kelvin
				high: 310.928,
				low: 255.372
			},
			// Calculate percentage from range
			per = percentFromRange(range.high, range.low, this.get('temperature')),
			/* Determine the icon to use.
			   Basically we are mapping the correct icon name based on
			   the percentage we got from above. */
			icon = toNearest(25, per, {
				high: 100,
				low: 0
			});

		return "assets/images/weather-icons/dark/therm_" + icon + ".png";
	}.property('temperature'),

	// Give user a readable alt text
	alt: function () {
		return this.get('temperature') + "k Slinkio Thermometer";
	}.property('temperature')
});

export default WeatherThermometerComponent;