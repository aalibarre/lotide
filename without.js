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


//assertArraysEqual([1, 2,3], [1, 2, 3]);

const without = function(source, itemsToRemove) {
  const sourceWithout = []
  for(let i = 0; i < source.length; i++) {
    if(source[i] === itemsToRemove[i]) {

    } else {
      sourceWithout.push(source[i])
    }
  }
  console.log(sourceWithout);
 return sourceWithout;
}
without([1, 2, 3], [1])