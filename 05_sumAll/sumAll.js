const sumAll = function(x, y) {
	if (isNaN(x) || isNaN(y)) return 'ERROR';
	if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR';
	if (x < 0 || y < 0) return 'ERROR';
	
	let small = x;
	let big = y;

	if (x > y){
		small = y;
		big = x;
	}

	let sum = 0;
	for (let i = small; i <= big; i++){
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
