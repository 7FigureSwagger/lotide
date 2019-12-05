const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');




console.log(assertArraysEqual(middle([1, 2, 3])), 2);
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5])), 3);
console.log(middle([1, 2, 3, 4, 5, 6]));
