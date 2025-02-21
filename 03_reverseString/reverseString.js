const reverseString = function(message) {
	let reverse = "";
	for (let i = message.length - 1; i >= 0; i--){
		reverse += message[i];
	}
	return reverse;
};

// Do not edit below this line
module.exports = reverseString;
