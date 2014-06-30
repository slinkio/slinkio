import { test, moduleForComponent } from 'ember-qunit';

var component;

moduleForComponent('weather-thermometer', 'Unit - Weather thermometer component',
	{
		setup: function() {
		component = this.subject();
	}
});

test('it renders', function() {
	expect(2);

	// creates the component instance
	var component = this.subject();
	equal(component.state, 'preRender');

	// appends the component to the page
	this.append();
	equal(component.state, 'inDOM');
});

test('Computes a src given a temperature', function () {
	ok(component, "Component exists");

	Ember.run(function () {
		component.setProperties({
			temperature: 309.5
		});
		equal(component.get('src').split('/').pop(), 'therm_100.png', "Get therm_100.png given 309.5 Kelvin");
	});

	Ember.run(function () {
		component.setProperties({
			temperature: 295.372
		});
		equal(component.get('src').split('/').pop(), 'therm_75.png', "Get therm_75.png given 295.372 Kelvin");
	});

	Ember.run(function () {
		component.setProperties({
			temperature: 285.928
		});
		equal(component.get('src').split('/').pop(), 'therm_50.png', "Get therm_50.png given 285.928 Kelvin");
	});

	Ember.run(function () {
		component.setProperties({
			temperature: 272.039
		});
		equal(component.get('src').split('/').pop(), 'therm_25.png', "Get therm_25.png given 272.039 Kelvin");
	});

	Ember.run(function () {
		component.setProperties({
			temperature: 258.15
		});
		equal(component.get('src').split('/').pop(), 'therm_0.png', "Get therm_0.png given 258.15 Kelvin");
	});

	// Test Extremes
	Ember.run(function () {
		component.setProperties({
			temperature: 400
		});
		equal(component.get('src').split('/').pop(), 'therm_100.png', "Extremes : Get therm_100.png given 400 Kelvin");
	});
	
	Ember.run(function () {
		component.setProperties({
			temperature: 197.039
		});
		equal(component.get('src').split('/').pop(), 'therm_0.png', "Extremes : Get therm_0.png given 197.039 Kelvin");
	});
});