/**
 * Reference types
 *
 * Objects
 * Arrays
 * Functions
 *
 */

// Arrays stores list of items

// Array literal
let emptyArray = [];

// Array can hold different dtypes in the array
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
selectedColors[3] = 1;
console.log(selectedColors);
console.log(typeof selectedColors); // Object

// Accessing index of array
console.log(selectedColors[0]);

console.log(selectedColors.length);

// Accesing index out of range
console.log(selectedColors[5]); // Undefined
