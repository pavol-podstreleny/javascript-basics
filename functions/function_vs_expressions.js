// Function declaration syntax
function walke() {
  console.log("Walk");
}

// Anonymouse Function expression
let run = function () {
  console.log("run");
};

// Named Function expression
let sleep = function walk() {
  console.log("walk");
};

let x = 1;

let move = run;
run();
move();
