const assertEqual = function(actual, expected) { 
  if(actual === expected) {
    console.log(`✅✅✅ Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
 }

 //Implement the function findKeyByValue which takes in an object and a value. 
 const findKeyByValue = function(myObject, value) {
   for (let firstKey in myObject) {
    if(myObject[firstKey] === value) {
    //It should scan the object and return the first key which contains the given value. 
    return firstKey
     } 
   } 
   }
 
 //It should scan the object and return the first key which contains the given value. 

  
 //If no key with that given value is found, then it should return undefined.
  //console.log(Object.keys(myObj))

 const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
 assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
