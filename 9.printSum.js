"use strict";

/* Create a function that takes infinite count of elements, operator and prints their sum. If there's no
operator, then default should be +. */

function printSum(operator, ...nums) {
	switch (operator) {
		case "*":
			let mul = nums[0];
			for (let i = 1; i < nums.length; i++) {
				mul *= nums[i];
			}
			return mul;
			break;
		case "-":
			let diff = nums[0];
			for (let i = 1; i < nums.length; i++) {
				diff -= nums[i];
			}
			return diff;
			break;
		case "**":
			let pow = nums[0];
			for (let i = 1; i < nums.length; i++) {
				pow **= nums[i];
			}
			return pow;
			break;
		default:
			let sum = operator;
			for (let i = 0; i < nums.length; i++) {
				sum += nums[i];
			}
			return sum;
	}
}

console.log(printSum("*", 1, 2, 3));       // 6
console.log(printSum(1, 2, 3, 4, 5));      // 15
console.log(printSum("-", 1, 2, 3, 6, 7)); // -17
console.log(printSum("**", 2, 3, 2));      // 64