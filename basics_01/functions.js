/**
 * Reference types
 *
 * Objects
 * Arrays
 * Functions
 *
 */

// Function definition
// If we don't pass argument value by default argument will be undefined ! WEIRD !
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

// Function returning value
function square(number) {
  return number * number;
}

function withoutReturn() {
  console.log("rofl");
}

// calling function
greet("Palo", "Smith");
greet("Fero", "Smith");

const number = square(2);

console.log(withoutReturn()); // Function returns undefined
console.log(square(5));
