// ##pair(obj)
// Construct array pairs from Objects.
// You can grab all keys using `Object.keys(obj)` and iterate over it like any other array.

var myPeeps = {
	"Anil": "Bridgpal",
	"Sarah": "Hanley",
	"Lenny": "Urbanowski",
}

var pair = function(object) {
	var newArray = [];
	for (key in object) {
		newArray.push( [key, object[key]] )	
	} 
	return newArray;
}

console.log(pair(myPeeps));



/*------------ extra thing I did to drive home the concept of for...in loop
var food = {
	'fruit': 'strawberry',
	'junk': 'velveeta',
	'vegetable': 'broccoli',
	'pug food': 'kibbz'
}

var together = function(object) {
	var foodArray = [];
	for (key in object) {
		foodArray.push( [key, object[key]] )
	}
	return foodArray;
}
console.log(together(food));
-------------------------------------------------*/