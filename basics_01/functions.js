/**
 * Reference types
 *
 * Objects
 * Arrays
 * Functions
 *
 */

// Function definition
// If we don't pass argument value by default argument will be undefined
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

// Function returning value
function square(number) {
  return number * number;
}

// calling function
greet("Palo", "Smith");
greet("Fero", "Smith");
console.log(square(5));
