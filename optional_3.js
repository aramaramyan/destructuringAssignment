"use strict";

/* Create a function that returns the frequency distribution of an array. This function should return an object,
	 where the keys are the unique elements and the values are the frequency in which those elements occur. */

function getFrequencies(arr) {
	if (!Array.isArray(arr)) {
		return "The argument of function must be an array!";
	}

	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		obj[arr[i]] = 0;
	}

	for (let key in obj) {
		for (let i = 0; i < arr.length; i++) {
			if (key === String(arr[i])) {
				obj[key]++;
			}
		}
	}

	return obj;
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));         // { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2]));                   // { "1": 1, "2": 2, "3": 2 }
console.log(getFrequencies([true, false, true, false, false])); // { true: 2, false: 3 }
console.log(getFrequencies([]));                                // {}