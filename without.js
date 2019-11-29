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

const assertArraysEqual = function(arr1, arr2) {
	console.log(eqArrays(arr1, arr2));
};

const assertEqual = function(actual, expected) {
	if (actual !== expected) {
		console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
	} else if (actual === expected) {
		console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
	}
};

const without = function(source, itemsToRemove) {
	let temp = source;
  // console.log(source.indexOf(itemsToRemove[0]));
  console.log('func');
	for (let i = 0; i < itemsToRemove.length; i++) {
    console.log(i);
    if (temp[i] === itemsToRemove[i]) {
      console.log('match ', temp[i], + ' ' + itemsToRemove[i]);
      let trash = temp.splice(i, 1);
    }

  }

	return temp;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
