const assertEqual = require('./assertEqual');


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

module.exports = eqArrays;
