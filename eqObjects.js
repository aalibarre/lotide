const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  let object1Key = Object.keys(object1);
  let object2key = Object.keys(object2);
  //console.log(object1Key);
  //console.log(object2key);
  // both object1Key and object2Key are variables that will hold all the keys in object 1 and object 2. This is done so that they can be compared in teh if statment. 
  //therefore in the if statement you want to if the lengths are equal. if they are not equal then the function will not go onto the next step
  //it will return false. After that a for loop to loop through the objects. 
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true
//console.log(assertEqual(eqObjects(cd, dc), true));
//console.log(assertEqual(eqObjects(cd, dc), false));
const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
console.log(assertEqual(eqObjects(cd2,cd), false));

//const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba);

//const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
