import temperatureConvert from 'slinkio/utils/temperature-convert';

module('temperatureConvert');

// Replace this with your real tests.
test('it converts kelvin to C and F', function() {
	equal(temperatureConvert(320, "c"), 47, "returns 47 given 320");
	equal(temperatureConvert(320, "f"), 116, "returns 116 given 320");
	equal(temperatureConvert(320), 116, "returns 116 given 320 & no preference");
});