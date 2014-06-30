import Ember from 'ember';

var WeatherObjectController = Ember.ObjectController.extend({
	needs: [ "weather-widget" ],
	temperature_pref: "f",
	
	weatherCondition: function () {
		// Maybe a bit repetitous, but we need to alias this for template manipulation
		return this.get('weather')[0];
	}.property('weather'),

	shown: function () {
		return this.get('controllers.weather-widget.locationIndex') === this.get('locationIndex');
	}.property('controllers.weather-widget.locationIndex', 'controllers.weather-widget.weatherData'),

	icon: function () {
		return "assets/images/weather-icons/dark/" + this.get('weatherCondition.icon') + ".png";
	}.property('weatherCondition'),

	modal_id: function () {
		return "forecast-" + this.get('locationIndex');
	}.property('id')
});

export default WeatherObjectController;