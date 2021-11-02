const eqArrays = require('./eqArrays');
const assertArrayEqual = require('./assertArrayEqual');

const middle = function (array1) {
  let middleArray = [];

  for (let i = 0; i < array1.length; i++) {
    if (array1.length <= 2) {
      return middleArray;
    } else if (array1.length % 2 === 1) {
      let middleNum = array1[Math.floor(array1.length / 2)];
      middleArray.push(middleNum);
      return middleArray;
    } else if (array1.length % 2 === 0) {
      let upperMiddleNum = array1[Math.floor((array1.length - 1) / 2)];
      let lowerMiddleNum = array1[Math.floor((array1.length + 1) / 2)];
      middleArray.push(upperMiddleNum);
      middleArray.push(lowerMiddleNum);
      return middleArray;
    }
  }
  //console.log(middleArray);
  return middleArray;
};

module.exports = middle;


