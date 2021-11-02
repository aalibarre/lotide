const eqArrays = require('../eqArrays');
const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');

const assert = require('chai').assert;

describe("middle", () => {
    it("it should give middle value", () => {
      assert.deepEqual(middle([1,2,3,4,5]), [3]);
    }); 
  });






