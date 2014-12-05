// ##pluck(someArray, "someKey")
// Using `map` construct a function called Pluck that will input array, and grab all matching keys. The function should return the values of keys in an array.

var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

var pluck = function(arr, key) {
	return arr.map(function(element) {
		return element[key];
	}
)}

console.log(pluck(albums, 'artist'));

