"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d;
	d = b ** 2 - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2)
	}
	return arr;
}

solveEquation(a, b, c);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = (percent / 100) / 12;
	let s = amount - contribution;
	let monthlyPayment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	let totalMortgage = +(monthlyPayment * countMonths).toFixed(2);

	return (totalMortgage);
}
calculateTotalMortgage(percent, contribution, amount, countMonths);