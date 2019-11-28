const failed = 'Assertion Failed';
const passed = 'Assertion Passed';


const assertEqual = function(actual, expected) {
  if(actual != expected){
    console.log(`😔😔 Assertion failed, ${actual} != ${expected}`);
  } else if(actual === expected) {
    console.log(`🧙‍♂️🧙‍♂️ Assertion passed ${actual} == ${expected}`);
  }
  //console.assert(actual === expected, {actual, passed});
}

let findKeyByValue = function(obj, value) {
  // let arr = [];
  // arr = Object.getOwnPropertyNames(obj);

  // for(let i = 0; i < Object.keys(obj).length; i++){
  //   // console.log(Object.keys(obj));
  //   console.log(obj);
  // }
  let val;
  for (var x in obj) {
    // console.log(x);
    // if(x){
    // console.log(Object.values(x));
    if (obj[x] === value) {
      val = x;
      // console.log(x);
      return val;
    }
  }
  // return val;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);