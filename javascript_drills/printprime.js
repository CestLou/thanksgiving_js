// ##printPrime(number)
// Take a number, and print all primes up to and including that number.

var printPrime = function(num) {
	var isPrime = function(n) {
		if (isNaN(n) || n%1) {return false;}
		if (n === 1) {return true;}
		if (n === 2) {return true;}
		for (var i = 2; i < n; i++){
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	};
	var allPrimeNum = [];
	for (var i = 1; i <= num; i++) {
		if (isPrime(i) === true) {
			allPrimeNum.push(i)
		} 
	}
	return allPrimeNum;
}

console.log(printPrime(11));