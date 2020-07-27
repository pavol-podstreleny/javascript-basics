function sum(...args) {
  return args.reduce((a, b) => (a += b));
}

function sum2() {
  let sum = 0;
  for (argument of arguments) {
    sum += argument;
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum2(1, 2, 3, 4, 5, 6));
