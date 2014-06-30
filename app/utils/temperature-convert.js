/*
	NOTE: This is a functional method provided to the handlebars helper 'temperature-convert'
	      It can be accessed directly via import!
*/

export default function temperatureConvert (temp, pref) {
	// We need the Kelvin to Celcius no matter what the preference is
	var cel = temp - 273.15;
	// Convert Celcius to Fahrenheit if we need to
	return Math.round((pref === "c") ? cel : ( cel / ( 5 / 9 ) ) + 32);
}