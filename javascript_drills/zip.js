// ##zip(array, array2)
// Take two arrays, and combine them.

var artists = ["Passion Pit", "Mumford and Sons", "MGMT"];
var albums = ["Gossamer", "Sigh no more", "Time to Pretend"];
var newArray = [];

var zip = function(array1, array2){
	array1.forEach(function(element){
		array2.push(element)
	})	
	return array2;
}

console.log(zip(artists, albums));
 