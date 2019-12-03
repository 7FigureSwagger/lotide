const assertEqual = require('./assertEqual');


const head = function(element){
  let output = element.shift(element);
  return output;
}


module.exports = head;