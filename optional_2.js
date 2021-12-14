"use strict";

/* Write a function that creates an object with each (key, value) pair being the (lower case, upper case)
	versions of a letter, respectively. */

function mapping(arr) {
	if(!Array.isArray(arr)) {
		return "The argument of function must be an array!";
	}

	let obj = {};

	for(let i = 0; i < arr.length; i++) {
		if(typeof(arr[i]) !== "string") {
			return `Type of item on index: ${i} is not string!`
		}

		obj[arr[i].toLowerCase()] = arr[i].toUpperCase();
	}

	return obj;
}

console.log(mapping(["p", "s"]));           // { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"]));      // { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])); // { "a": "A", "v": "V", "y": "Y", "z": "Z" 