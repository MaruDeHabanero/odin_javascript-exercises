const leapYears = function(year) {
	if (year % 4 != 0) return false;
	if (year % 100 == 0){
		return year % 400 == 0;
	} else {
		return true;
	}
};

// TODO: aquí te quedaste, salieron fail en los tests (sdxxdxdxd)
// Do not edit below this line
module.exports = leapYears;
