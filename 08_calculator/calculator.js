const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
	array.forEach((item) => sum += item);
	return sum;
};

const multiply = function(array) {
	let mult = 1;
	array.forEach((item) => mult *= item);
	return mult;
};

const power = function(a, b) {
	const constant = a;
	for (let i = 1; i < b; i++){
		a *= constant;
	}
	return a;
};

const factorial = function(num) {
	if (num == 0) return 1;
	if (num <= 2) return num;

	for (let i = num - 1; i > 1; i--){
		num *= i;
	}

	return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
