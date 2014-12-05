// ##fib(n)
// Write a method to return the Nth number of Fibonacci sequence.

var finnFib = function(num) {
	var newArr = [0, 1];
	if (num === 1) {return newArr[0];}
	if (num === 2) {return newArr[1];}
	for (var i = 2; i < num; i++) {
		newArr.push(newArr[i-2] + newArr[i-1])
	}
	return newArr[num - 1];
}
console.log(finnFib(3));