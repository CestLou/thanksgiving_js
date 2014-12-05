// ##compress(string)
// Use a pattern and consolidate the amount of characters into a simplified string

// ```
// input  pattern = "AAASSSDDDDRDDSASSDDDSSSAD"  
// output pattern = 3A3S4DR2DSA2S3D3SAD
// ```

// If a character is represented more than once, append the number of occurences in front of it.
// If a chracter is only represented once, just put that letter

// **Hint** Use a loop to iterate over a string. You can reference characters in a string similar to an array.
var input = 'AAASSSDDDDRDDSASSDDDSSSAD';
var compress = function(string) {
	var currentChar = string[0];
	var counter = 1;
	var output = '';
	for (var i = 0; i < string.length; i++) {
		if (currentChar === string[i] + 1) {
			counter += 1
		} else {
			output += counter + currentChar
			currentChar = string[i] + 1
			counter = 1;
		}
	}
	return output;
}
console.log(compress(input));