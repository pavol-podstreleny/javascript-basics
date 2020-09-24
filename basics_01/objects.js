/**
 * Reference types
 *
 * Objects
 * Arrays
 * Functions
 *
 */

// Object contains key: value pairs
let person = {
  name: "Mosh",
  age: "30",
};

console.log(person);

//Accesing properties through .
person.name = "John";
console.log(person);

// Bracket notation for accesing properties
person["name"] = "Mary";
console.log(person);

// What to use . notation or bracket notation?
// if we don't know name of target property we can use bracket notation
