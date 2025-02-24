// The functions are one liners since the formulas are found in Wikipedia.

const convertToCelsius = function(tempInF) {
	let tempInCelcius = (tempInF - 32) * (5/9);
	return Math.round(tempInCelcius * 10) / 10;
};

const convertToFahrenheit = function(tempInC) {
	let tempInFahrenheit = (tempInC * 9/5 + 32);
	return Math.round(tempInFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
