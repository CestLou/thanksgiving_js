// ##isPrime(number)
// Return `true` or `false` if a number is a prime number

var figurePrime = function(n) {
	if (isNaN(n) || n%1) {return false;}
	if (n === 1) {return true;}
	for (var i = 2; i < n; i++){
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(figurePrime(5));