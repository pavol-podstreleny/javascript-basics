function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = "red";
    }
    console.log(i);
  }

  console.log(color);
}

// var => function-scope
// ES6: let, const => block-scope variables

start();

// Color is attached to window object
// window.color
//
var color = "red";

// Not attached to window object
let age = 30;

// Global function attached to window function
function sayHi() {}
