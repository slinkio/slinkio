import Ember from 'ember';

var WeatherWidgetController = Ember.ArrayController.extend({
	// Fixture Data Below
	locations: ["Billings, MT", "Denver, CO", "London, UK", "Nairobi, Kenya", "Sydney, Australia", "Tindouf, Algeria", "Death Valley, California"],
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
		// If we are getting an update, set needsUpdate to false
		if(self.get('needsUpdate')) {
			self.set('needsUpdate', false);
		} else {
			// Prevent the observer from firing twice when we set the needsUpdate to false
			return;
		}
		locations.forEach(function (location) {
			// Poll the weather api for the current conditions
			$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + location.replace(" ", "%20") + '&APPID=a5d26b94d2771b049adc4a301d1b6133', function (current_conditions) {
				// Set the location index of the object based on the locations array
				current_conditions.locationIndex = locations.indexOf(location);
				// Poll the weather api for the forecast
				$.getJSON('http://api.openweathermap.org/data/2.5/forecast/daily?id=' + current_conditions.id + '&cnt=10&APPID=a5d26b94d2771b049adc4a301d1b6133', function (forecast) {
					// We get some non-forecast data from the first call, so we map the temp forecast data to the top object
					current_conditions.temp = (forecast.list) ? forecast.list[0].temp : {};
					// We also need to map the temp from main to the current temp
					current_conditions.temp.current = (current_conditions.main) ? current_conditions.main.temp : null;
					// Map the forecast to the forecast on the top object
					current_conditions.forecast = forecast.list || [];
					// Push the entire object into our data array only if it has a current temperature. Otherwise, it's likely we haven't gotten a good response.
					if(current_conditions.temp.current) {
						data.push(current_conditions);
					}
					// Increment the counter so that we can track requests
					count++;
					// If we have fulfilled all the requests, we will set the weather data on the controller
					if(count === len) {
						self.set('weatherData', data);
						// Force an update of this data after 5 minutes
						setTimeout(function () {
							self.set('needsUpdate', true);
						}, (1000 * 60) * 5);
					}
				});
			});
		});
	}.observes('locations', 'needsUpdate'),

	currentLocation: function () {
		// Select the location from the weather data (locations) array
		return this.get('locations')[this.get('locationIndex')];
	}.property('locationIndex'),

	activeModal: function () {
		return "forecast-" + this.get('locationIndex');
	}.property('locationIndex'),

	actions: {
		changeLocation: function (next) {
			// Simply change the location index to fire the currentLocation computed property
			if(next) {
				this.incrementProperty('locationIndex');
			} else {
				this.decrementProperty('locationIndex');
			}
		}
	}
});

export default WeatherWidgetController;