const eqArrays = function(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
     if(array1[i] !== array2[i]) {
       return false;
     }
   }
   return true; 
  }



const eqObjects = function (object1, object2) {
    let object1Key = Object.keys(object1);
    let object2key = Object.keys(object2);
    if (!object1Key.length === object2key.length) {
      return false;
    }
    for (let key of object1Key) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  };


  const inspect = require('util').inspect;
  const assertObjectsEqual = function(actual, expected) {
      const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`✅ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
      } else {
        console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
  };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

  
  console.log(assertObjectsEqual(eqObjects(ab,ba),true));

