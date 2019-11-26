const failed = 'Assertion Failed';
const passed = 'Assertion Passed';


const assertEqual = function(actual, expected){ 
  if(actual != expected){
    console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
  } else if(actual === expected) {
    console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
  }
  //console.assert(actual === expected, {actual, passed});
}

const head = function(element){
  let output = element.shift(element);
  return output;
}

console.log(head([1,2,3]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Helloo");