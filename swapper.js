/* get the value of key 1 object 1 and put it in key 2 object 2 
 take the original value of key 2 object 2 and put it in key 1 of object 1 
 no need to return 

 const findKey = function (obj, given) {
     for (const key of Object.keys(obj)) {
       if (given === key) return key;
     }
     return undefined;
   };
  
   const swap = (obj1, obj2, key1, key2) => {
     let tmp = obj1[key1];
     obj1[key1] = obj2[key2];
     obj2[key2] = tmp;
  }; */


  
  
 // FUNCTION IMPLEMENTATION
 const swapper = function (key1, object1, key2, object2) {
  console.log('Swap!');
  const newKeyOne = object1[key1];
  const newKeyTwo = object2[key2];

  object1[key1] = newKeyTwo;
  object2[key2] = newKeyOne;

  
  

  /* Put your solution here
   let tmp1 = findKey(object1, key1);
   let tmp2 = findKey(object2, key2);
   if (tmp1 && tmp2) swap(object1, object2, tmp1, tmp2); */

  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1, b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8, b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12 });
swapper('c', { a: 1, b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });