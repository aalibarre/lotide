const eqArrays = function(array1, array2) {
  for(let i = 0; i < array1.length; i++) {
   if(array1[i] !== array2[i]) {
     return false;
   }
 }
 return true; 
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i <sentence.length; i++) {
    let letter = sentence[i]
    if (results[letter]) {
      results[letter].push(i)
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);