function getAge(yearBirth, yearDead){
	return yearDead - yearBirth;
}

const findTheOldest = function(people) {
	let oldestPerson = "";

	const currentYear = 2025;
	let oldestAge = 0;

	for (person of people){
		let age = 0;
		
		if (person.yearOfDeath === undefined){
			age = getAge(person.yearOfBirth, currentYear);
		} else {
			age = getAge(person.yearOfBirth, person.yearOfDeath);
		}

		if (age > oldestAge){
			oldestAge = age;
			oldestPerson = person;
		}
	}

	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
