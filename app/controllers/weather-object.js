import Ember from 'ember';

var WeatherObjectController = Ember.ObjectController.extend({
	needs: [ "weather-widget" ],
	temperature_pref: "f",
	
	weatherCondition: function () {
		// Maybe a bit repetitous, but we need to alias this for template manipulation
		return this.get('weather')[0];
	}.property('weather'),

	temperature: function () {
		// We need the Kelvin to Celcius no matter what the preference is
		var cel = this.get('main.temp') - 273.15;
		// Convert Celcius to Fahrenheit if we need to
		return Math.round((this.get('temperature_pref') === "c") ? cel : ( cel / ( 5 / 9 ) ) + 32);
	}.property('main.temp', 'temperature_pref'),

	shown: function () {
		return this.get('controllers.weather-widget.locationIndex') === this.get('locationIndex');
	}.property('controllers.weather-widget.locationIndex', 'controllers.weather-widget.weatherData'),

	icon: function () {
		return "assets/images/weather-icons/dark/" + this.get('weatherCondition.icon') + ".png";
	}.property('weatherCondition')
});

export default WeatherObjectController;