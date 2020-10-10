// Rest operator
// Rest parameter has to be last parameter in the function
function sum(...args) {
  // Rest operator takes multile arguments and put the into array
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
