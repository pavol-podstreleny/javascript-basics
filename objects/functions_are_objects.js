// Functions are objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3, 4]);
