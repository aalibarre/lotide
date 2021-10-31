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



const words = ["ground", "control", "to", "major", "tom"];
  const map = function(array, callback) {
    const results = [];
    for(let item of array) {
     // console.log('item BEORE: ', item);
     // console.log('item AFTER: ', callback(item));
     //console.log('---');
     results.push(callback(item));
    }
    return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);



