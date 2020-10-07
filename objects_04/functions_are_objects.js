// Functions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

console.log(Circle.name); // Name of the function
console.log(Circle.length); // length number of arguments
console.log(Circle.constructor); // references function that created function Circle object => Function () {}

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
  this.draw = function () {
  console.log("draw");
};`
);

const circle = Circle1(2);

// Calling Circle object passing empty object {}, and argument 1 = radius
Circle.call({}, 1);
// This syntax is the same as above :)
const another = new Circle(1);

// Same as call method, we can call the function, when we want to pass arguments as the array
Circle.apply({}, [1, 2, 3, 4]);
