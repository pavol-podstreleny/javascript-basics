function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
console.log(circle.constructor);

// let x = new Object();
let x = {};

console.log(x.constructor);

// Every object has constructor property
// This property reference to function which created the object

// new String(); '',"",``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3
