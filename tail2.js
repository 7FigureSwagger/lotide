const failed = 'Assertion Failed';
const passed = 'Assertion Passed';


const assertEqual = function(actual, expected) {
  if(actual != expected){
    console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
  } else if(actual === expected) {
    console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
  }
  //console.assert(actual === expected, {actual, passed});
};

const tail = function(element) {
  return element.slice(1);
};

let test = [1, 2, 3];
let result = tail(test);
console.log('test', result);
for(let i = 0; i < result.length; i++){
  assertEqual(result[i], test[i + 1]);
};





const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!