console.log(false || false); // false
console.log(false || "Mosh"); // "Mosh"
console.log(false || 1); // 1
console.log(false || ""); // returns ""
console.log(true || "Mosh"); // true
console.log("Mosh" || "Fero"); // "Mosh" => returns first truthy value

// Result of logical expression in javascript is not necessary true or false
// It depends on value of operands we have

// Truthy Falsy values

// False: undefined, null, 0, false, "" NaN
// Truthy: anything not falsy is truthy
