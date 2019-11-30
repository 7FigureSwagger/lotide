const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results1 = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results1.push(callback(item));
  }
  return results1;
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

  const assertArraysEqual = function(arr1, arr2){
    console.log(eqArrays(arr1, arr2));
  }

const results1 = map(words, word => word[0]);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
console.log(results1);

