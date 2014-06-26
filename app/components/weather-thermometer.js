import Ember from 'ember';
import { percentFromRange, toNearest } from './../utils/extended-math';

var WeatherThermometerComponent = Ember.Component.extend({
	icon: function () {
		var pref = this.get('temperature_pref'),

			// Calculate the range we will use to determine the icon based on C or F
			range = {
				high: (pref === "c") ? 32 : 90,
				low: (pref === "c") ? -18 : 0
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

	}.property('temperature', 'temperature_pref')
});

export default WeatherThermometerComponent;