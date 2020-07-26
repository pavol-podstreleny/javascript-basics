// bitwise OR
// 1 = 00000001
// 2 = 00000010
// R = 00000011

// bitwise AND
// 1 = 00000001
// 2 = 00000010
// R = 00000000

console.log(1 | 2); // Bitwise orr -> 3
console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
