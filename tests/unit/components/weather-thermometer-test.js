import { test, moduleForComponent } from 'ember-qunit';

var component;

moduleForComponent('weather-thermometer', 'Unit - Weather thermometer component',
	{
		setup: function() {
		component = this.subject();
	}
});

test('Computes an icon given a temperature', function () {
	ok(component);

	Ember.run(function () {
		component.setProperties({
			temperature: 99
		});
		equal(component.get('icon').split('/').pop(), 'therm_100.png');
	});

	
	// Test Extremes
	Ember.run(function () {
		component.setProperties({
			temperature: 125
		});
		equal(component.get('icon').split('/').pop(), 'therm_100.png');
	});

	

	Ember.run(function () {
		component.setProperties({
			temperature: 72
		});
		equal(component.get('icon').split('/').pop(), 'therm_75.png');
	});

	

	Ember.run(function () {
		component.setProperties({
			temperature: 55
		});
		equal(component.get('icon').split('/').pop(), 'therm_50.png');
	});


	Ember.run(function () {
		component.setProperties({
			temperature: 30
		});
		equal(component.get('icon').split('/').pop(), 'therm_25.png');
	});

	

	Ember.run(function () {
		component.setProperties({
			temperature: 5
		});
		equal(component.get('icon').split('/').pop(), 'therm_0.png');
	});

	

	Ember.run(function () {
		component.setProperties({
			temperature: -25
		});
		equal(component.get('icon').split('/').pop(), 'therm_0.png');
	});

	
});