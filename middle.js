const eqArrays = function(array1, array2) {
  for (let i = 0; x < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

  
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const middle = function(array1, array2) {
  let middleArray = []
  let middleNum = array1[Math.floor(array1.length / 2)];
  let upperMiddleNum = array1[Math.floor((array1.length - 1) / 2)];
  let lowerMiddleNum =  array1[Math.floor((array1.length + 1) / 2)];
  for(let i = 0; i < array1.length; i++) {
    if(array1.length <= 2) {
    return middleArray;
  } else if(array1.length % 2 === 1) {
    middleArray.push(middleNum);
    return middleArray;
  } else if (array1.length % 2 === 0) {
    middleArray.push(upperMiddleNum);
    middleArray.push(lowerMiddleNum);
    return middleArray;
  }
}
console.log(middleArray)
return middleArray 
}
