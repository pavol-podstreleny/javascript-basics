// Rest operator
// Rest parameter has to be last parameter in the function
function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
