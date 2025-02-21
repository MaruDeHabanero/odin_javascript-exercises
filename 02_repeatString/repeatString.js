const repeatString = (word, number) => {
	if (number < 0) return "ERROR";
	let message = "";
	for (let x = 0; x < number; x++){
		message += word;
	}
	return message;
};

// Do not edit below this line
module.exports = repeatString;
