// Primitive
const message = "hi";

// Object
const message2 = new String("Hi");

// Automatically cast primitive to object if we call method
message.trim();

console.log(typeof message2);
console.log(typeof message);

console.log(message.length);
console.log(message[0]);
console.log(message.includes("not")); // contains not?
console.log(message.startsWith("i"));
console.log(message.endsWith("i"));
console.log(message2.indexOf("my"));
console.log(message2.replace("first", "second"));
console.log(message.trim());

// using same escaping characters in string
