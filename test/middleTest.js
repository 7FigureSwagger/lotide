const middle = require('../middle.js');
// const assertArraysEqual = require('../assertArraysEqual.js');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns "2" when passed [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  })
  it('returns "3" when passed [1, 2, 3, 4, 5,]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  })
  it('returns [3, 4] when passed [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })
  it('returns [] when passed [1, 2]', () => {
    assert.deepEqual(middle([1, 2,]), []);
  })
})


