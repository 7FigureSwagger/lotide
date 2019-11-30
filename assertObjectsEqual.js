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
const obj1 = {'a': 1, 'b': 2};
const obj2 = {'a': 1, 'b': 3};

const eqObjects = function(object1, object2) {
	let arr1;
	let arr2;
	arr1 = Object.keys(object1).sort();
	arr2 = Object.keys(object2).sort();

	let objL1 = Object.keys(object1).length;
	let objL2 = Object.keys(object2).length;
  console.log(arr1, arr2, 'arg passed');
	if (objL1 !== objL2) {
    console.log('length doesnt equal', objL1, obj2);
		return false;
	}

	for (let key of arr1) {
		if (arr1[key] !== arr2[key]) {
      console.log('key value not equal');
			return false;
		}
  }
  console.log('all match');
	return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  console.log(eqObjects(actual, expected));
};
// console.log(cd);
// console.log(assertEqual(eqObjects(cd, dc))); // => true

// console.log(assertEqual(assertArraysEqual(eqObjects(dc, cd))));
assertObjectsEqual(obj1, obj2);