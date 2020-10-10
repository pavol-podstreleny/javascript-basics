// We can cal walk() function before it is defined
// We can not do this with function expression
// Javascript engine moves all function declaration on the top :D
// That is the reason why we can call the walk function
// This is called hoisting
walk();

// Function declaration syntax
function walk() {
  console.log("Walk");
}

//We can not call run before it is declared => function expression is not working as function declaration
//run()

// Anonymouse Function expression
let run = function () {
  console.log("run");
};
