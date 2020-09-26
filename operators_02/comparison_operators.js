/**
 * Comparison operator
 */
let x = 1;

// Relational
console.log(x > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);

// Equality
console.log(x == 0); // (Value check)
console.log(x != 0);
console.log(x === 0); // (Type and value check)
console.log(x !== 0);

console.log(1 === 1); // true
console.log("1" === 1); // false
console.log(1 == 1); // true
console.log("1" == 1); // true

console.log(true == 1); // true == true
// Strict equality === ensures both types have the same value
// Non strict equality operator == convert second operant into the same type first

// == operator looks at the value on the left side
// It will automatically convert the 1number into string ("1" == "1")
console.log("1" == 1); // true

// It will convert the value on the right side to boolean (true == true)
console.log(true == 1);
