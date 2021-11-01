const assertEqual = function(actual, expected) { 
  if(actual === expected) {
   // console.log(`✅✅✅ Passed: ${actual} === ${expected}`);
  } else {
   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
 }
 //assertEqual("Lighthouse Labs", "Bootcamp" );
 //assertEqual(1, 1);

 //Implement the function findKey which takes in an object and a callback. 
 //It should scan the object and return the first key for which the callback returns a truthy value. 
 //If no key is found, then it should return undefined.

const findKey = function(firstObject,callback) {
  for(let firstKey in firstObject) {
    if(callback(firstKey)) {
    return firstKey;
  } else {
    return "undefined"; 
  }
}
  return firstKey;
}

assertEqual("Lighthouse Labs", "Bootcamp" );
assertEqual(1, 1);
