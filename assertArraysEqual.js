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

  assertArraysEqual([3, 4, 5], ['a', 'b', 'c']);