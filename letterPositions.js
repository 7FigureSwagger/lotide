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

const eqArrays = function(arr1, arr2) {  
  let t1 = [];
  
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === arr2[i]){
      t1.push(arr1[i])
    } else {
      return false;
    }
  }
  return true;
  };

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let i = 0;
  for(x of sentence.split(" ").join("")){
    // console.log(x);
    if(!results[x]){
      results[x] = [];
      let temp = sentence.indexOf(x);
      // console.log('test', x, temp);
      results[x].push(temp);
    } else if(results[x]) {
      // let temp = sentence.indexOf(x);
      // console.log('test', x, i);
      results[x].push(i);
    }

    i++;
  }

  return results;
};


console.log(letterPositions('Lighthouse In The House'));
