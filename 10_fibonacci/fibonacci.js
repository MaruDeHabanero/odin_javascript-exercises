const fibonacci = function(index) {
	index = Number(index);
	if (index < 0) return "OOPS";
	if (index == 0) return 0;

	let last = 0;
	let present = 1;
	let sum = 0;

	for (let i = 0; i < index; i++){
		sum = last + present;
		last = present;
		present = sum;
	}

	return last;
};

// Do not edit below this line
module.exports = fibonacci;
