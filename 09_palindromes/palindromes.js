const palindromes = function (word) {
	word = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replaceAll(" ","");

	for (let i = 0; i < word.length; i++){
		if (word[i] != word[word.length - i - 1]){
			return false;
		}
	}
	
	return true;
};

// Do not edit below this line
module.exports = palindromes;
