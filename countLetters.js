const failed = 'Assertion Failed';
const passed = 'Assertion Passed';


const assertEqual = function(actual, expected) {
  if(actual != expected){
    console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
  } else if(actual === expected) {
    console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
  }
}

let outPut = {};


const countLetters = function(input){
  for(x of input){
    if(!outPut[x]){
      //console.log('test');
      outPut[x] = 1;
    } else {
      outPut[x] += 1;
      // console.log('test2');
    }
  }
  return outPut;
}

console.log(countLetters('wordwordjim'));