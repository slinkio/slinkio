import Ember from 'ember';

var WeatherWidgetView = Ember.View.extend({
	templateName: 'weather-widget',
	classNames: ['widget', 'weather-widget'],
	
	willInsertElement: function () {
		this.get('controller').set('needsUpdate', true);
	}
});

export default WeatherWidgetView;