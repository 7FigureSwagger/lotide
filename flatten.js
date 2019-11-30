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


const flatten = function(arr) {
  console.log('flatten function called with:', arr);
  let result = [];
 
    for (let i = 0; i < arr.length; i++) {
      // console.log('test', arr[i]);
      if (!Array.isArray(arr[i])) {
        console.log('value', arr[i], 'is a number');
        result.push(arr[i]);
      } else {
        console.log('value', arr[i], 'is an array');
        const flattenValue = flatten(arr[i]);
        result = result.concat(flattenValue);
      }
    
    }
  // }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
