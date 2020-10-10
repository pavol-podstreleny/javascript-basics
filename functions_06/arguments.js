function sum(a, b) {
  console.log(arguments);
  return a + b;
}

// This is valid and weird in javascript
// We do not need to pass arguments
console.log(sum(1));

// We can pass also additional arguments
// only 2 parameters are used by function -> weird :))
console.log(sumAll(1, 2, 3, 4, 5));

// Every function in javascript has special object called arguments

function sumAll(){
  let total = 0;

  for (let item of arguments){
    total += item
  }

  return total
}