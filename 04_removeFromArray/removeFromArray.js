const removeFromArray = function(list, ...args) {
	// First attempt: "const arg in args" returns the index, not the value. You dumb fuck.
	for (const arg of args){
		for (let i = 0; i < list.length; i++){
			if (arg === list[i]){
				list.splice(i, 1);
				// If found, check again if the same index has also the same number.
				// Keep deleting until no more matches of array are found.
				i--;
			}
		}
	}
	return list;
};

// Do not edit below this line
module.exports = removeFromArray;
