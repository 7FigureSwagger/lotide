const failed = "Assertion Failed";
const passed = "Assertion Passed";

const assertEqual = function(actual, expected) {
	if (actual != expected) {
		console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
	} else if (actual === expected) {
		console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
	}
	//console.assert(actual === expected, {actual, passed});
};

const assertArraysEqual = function(arr1, arr2) {
	console.log(eqArrays(arr1, arr2));
};

const eqArrays = function(arr1, arr2) {
	let t1 = [];

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] === arr2[i]) {
			t1.push(arr1[i]);
		} else {
			return false;
		}
	}
	return true;
};

const eqObjects = function(object1, object2) {
	let arr1;
	let arr2;
	arr1 = Object.keys(object1).sort();
	arr2 = Object.keys(object2).sort();

	let objL1 = Object.keys(object1).length;
	let objL2 = Object.keys(object2).length;

	if (objL1 !== objL2) {
		return false;
	}

	for (let key of arr1) {
		if (arr1[key] !== arr2[key]) {
			return false;
		}
	}
	return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(cd);
// console.log(assertEqual(eqObjects(cd, dc))); // => true

console.log(assertEqual(assertArraysEqual(eqObjects(dc, cd))));
