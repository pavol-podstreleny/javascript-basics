const numbers = [1, -1, 2, 3];

let sum = 0;
for (let n of numbers) sum += n;

const currentSum = numbers.reduce(
  (prevVal, currentVal) => prevVal + currentVal,
  0
);

console.log(currentSum);
