function sum(a, b) {
  console.log(arguments);
  return a + b;
}

// This is valid and weird in javascript
console.log(sum(1));

// We can pass also additional arguments
// only 2 parameters are used
console.log(sum(1, 2, 3, 4, 5));
