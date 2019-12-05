const assertEqual = require('./assertEqual');

const tail = function(element) {
  return element.slice(1);
};

// let test = [1, 2, 3];
// let result = tail(test);
// // console.log('test', result);
// for(let i = 0; i < result.length; i++){
//   assertEqual(result[i], test[i + 1]);
// };



module.exports = tail;
