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

const countOnly = function(allItems, itemsToCount) {
  for(key in itemsToCount){
    if(key){
      for(let i = 0; i < allItems.length; i++){
        if(key == allItems[i]){
          if(!outPut[key]){
            outPut[key] = 1;
          } else {
            outPut[key] += 1;
          }
        }
      }
    }
  }
  return outPut;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//let obj = {'name': true};
//console.log(obj);
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);