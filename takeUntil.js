//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

//To keep things simple, the callback should only be provided one value: The item in the array.

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  let newArray = []
  let alertBeFalse = false
  array.forEach(inArray => {
    if(callback(inArray) || alertBeFalse === true) {
      alertBeFalse = true
      return
    } else {
      newArray.push(inArray)
    }
  })
  return newArray; 
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
