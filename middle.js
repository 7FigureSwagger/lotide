const assertArraysEqual = require('./assertArraysEqual.js');


// const failed = 'Assertion Failed';
// const passed = 'Assertion Passed';


// const assertEqual = function(actual, expected) {
//   if(actual != expected){
//     console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
//   } else if(actual === expected) {
//     console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
//   }
// }


// const eqArrays = function(arr1, arr2) {  
//   let t1 = [];
  
//   for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] === arr2[i]){
//       t1.push(arr1[i])
//     } else {
//       return false;
//     }
//   }
//   return true;
//   };

//   const assertArraysEqual = function(arr1, arr2){
//     console.log(eqArrays(arr1, arr2));
//   }


  const middle = function(arr){
    if(arr.length < 3){
      return [];
    } else  if(arr.length % 2 !== 0) {
      let mid = Math.round(arr.length / 2);
     
      return mid;
    } else {
      let mid = Math.round(arr.length / 2);
      return arr.splice(mid, 2);
    }
  }

  module.exports = middle;
