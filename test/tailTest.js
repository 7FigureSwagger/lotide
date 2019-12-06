const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns "["Lighthouse", "Labs"]" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
})

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
