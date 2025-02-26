const getTheTitles = function(array) {
	// Looked this one over in class.
	// Map returns the object referenced in the map function. 
	// So, since each element of the array is an object, the argument becomes the object itself.
	// And object.title just returns the title of each object
	// This comment is so unnecesary but I need to write stuff to understand it so don't mind me.
	// hel yea
	return titles = array.map((object) => object.title);
};

// Do not edit below this line
module.exports = getTheTitles;
