"use strict";

/* Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The
	circles constructed must have two methods getArea() (PIr^2) and getPerimeter() (2PI*r) which give both
	respective areas and perimeter (circumference). */

class Circle {
	constructor(value) {
		this.value = value
	}

	getArea() {
		return Math.PI * this.value ** 2;
	}

	getPerimeter() {
		return 2 * Math.PI * this.value;
	}
}

let circy = new Circle(11);
console.log(circy.getArea());       // 380.132711084365

let circy1 = new Circle(4.44);
console.log(circy1.getPerimeter()); // 27.897342763877365