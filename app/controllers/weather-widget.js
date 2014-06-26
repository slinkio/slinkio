import Ember from 'ember';

var WeatherWidgetController = Ember.ArrayController.extend({
	// Fixture Data Below
	locations: ["Billings, MT", "Denver, CO"],
	locationIndex: 0,
	needsUpdate: false,

	onFirstLocation: function () {
		return this.get('locationIndex') === 0;
	}.property('locationIndex'),

	onLastLocation: function () {
		return this.get('locationIndex') === this.get('locations').length - 1;
	}.property('locationIndex'),

	shouldUpdateWeatherData: function () {
		var locations = this.get('locations'),
			len = locations.length,
			data = [],
			count = 0,
			self = this;
		if(self.get('needsUpdate')) {
			self.set('needsUpdate', false);
		} else {
			return;
		}
		locations.forEach(function (location) {
			$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location.replace(" ", "") + '&APPID=a5d26b94d2771b049adc4a301d1b6133', function (res) {
				res.locationIndex = locations.indexOf(location);
				data.push(res);
				count++;
				if(count === len) {
					self.set('weatherData', data);
					// Force an update of this data after 5 minutes
					setTimeout(function () {
						self.set('needsUpdate', true);
					}, (1000 * 60) * 5);
				}
			});
		});
	}.observes('locations', 'needsUpdate'),

	currentLocation: function () {
		return this.get('locations')[this.get('locationIndex')];
	}.property('locationIndex'),

	actions: {
		changeLocation: function (next) {
			if(next) {
				this.incrementProperty('locationIndex');
			} else {
				this.decrementProperty('locationIndex');
			}
		}
	}
});

export default WeatherWidgetController;