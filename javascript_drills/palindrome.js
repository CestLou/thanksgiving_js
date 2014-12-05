// ##isPalindrome(string)
// Create a method called `is_palindrome` to check if a string is a palindrome. Do not use any reverse method.

var isPalindrome = function(string) {
	var string = string.replace(/ /g, '').toLowerCase();
	for (var i = 0; i < string.length; i++) {
		if (string[i] === ' ') {
			string.slice(i, 1)
		}
	}
	var checkPal = true;
	for (var i = 0, j=string.length-1 ; i < string.length; i++, j--) {
		if (string[i] !== string[j]) {
			checkPal = false;
			console.log('Is not a palindrome!') 
			break;
		} 
	}
	if (checkPal === true){
		console.log('Is a palindrome!')
	}

}

isPalindrome('Evil Olive');