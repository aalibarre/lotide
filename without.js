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

// The question is to implement a function that will return a new array that removes the unwanted elements. Also, the question provided us with the names of 
//the arguments also known as the paramtere of teh function. The first step was to creat a new variable that would hold the new array we will make 
// as we are unaware of the contents of the array, the array is left empty. A for loop was made to loop so that all the elements are looped through. Then an if stament was 
// required as teh function had to remove the unwanted items. By stating if (source[i] === itemsToRemove[i]) we are using the index 
//because we are looking at the index of the array. If its not equal then push the new array to our variable sourceWithout. Then we both return and console.log 
//sourceWithout. 