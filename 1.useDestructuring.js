"use strict";

// Get name, country and jod using destructuring.

const person = {
	name: "Sarah",
	country: "Armenia",
	job: "Developer"
};

const { name, country, job } = person;

console.log(name);    // "Sarah"
console.log(country); // "Armenia"
console.log(job);     // "Developer"