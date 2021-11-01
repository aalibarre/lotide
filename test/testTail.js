const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Test Case 1: Check the returned array elements HEYYYY ASHA SAGAL ZAK STEFAN
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");



