const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
  } else if (actual === expected) {
    console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
  }
  //console.assert(actual === expected, {actual, passed});
};

const eqArrays = function(arr1, arr2) {
// let t1 = arr1.join("");
// let t2 = arr2.join("");

let t1 = [];
// let t2 = [];

for(let i = 0; i < arr1.length; i++){
  if(arr1[i] === arr2[i]){
    t1.push(arr1[i])
  } else {
    return false;
  }
}
return true;
  // if(t1 === t2){
  //   return true;
  // } else {
  //   return false;
  // }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false