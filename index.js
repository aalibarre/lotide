const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArrayEqual');
const eqArrays = require('./middle');
const assertEqual = require('./assertEqual');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  eqArrays: eqArrays,
  assertEqual: assertEqual
};

