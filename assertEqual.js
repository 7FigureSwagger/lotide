const failed = 'Assertion Failed';
const passed = 'Assertion Passed';


const assertEqual = function(actual, expected) {
  if(actual != expected){
    console.log('😔😔 Assertion failed, ' + actual + ' != ' + expected);
  } else if(actual === expected) {
    console.log('🧙‍♂️🧙‍♂️ Assertion passed ' + actual + ' == ' + expected);
  }
  //console.assert(actual === expected, {actual, passed});
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('Tree', 'tree');