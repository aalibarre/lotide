const assertEqual = function(actual, expected) { 
  if(actual === expected) {
    console.log(`✅✅✅ Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
 }

 const countLetters = function(sentence) {
   let newObject = {}
   let newSentence = sentence.replace(/ /g,'')
   for(let i = 0; i < newSentence.length; i++) {
     const letter = newSentence[i];
     if(newObject[letter]) {
       newObject[letter]++
     } else {
       newObject[letter] = 1
     }
   }
   return newObject
 }

console.log(countLetters("lighthouse labs"))