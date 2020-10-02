let x = 10;
let y = x;

x = 20;
console.log(y);
console.log(x);

// Reference is coppied not values
// Both anotherX and anotherY are pointing to the same location in the memory

let anotherX = { value: 10 };
let anotherY = anotherX;
anotherX.value = 20;
console.log(anotherX.value);
console.log(anotherY.value);
