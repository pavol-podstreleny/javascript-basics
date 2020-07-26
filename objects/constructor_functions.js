// Constructor Function
// Use Pascal notation

function Circle(radius) {
  // this is reference to object that is executing this piece of code
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// new operator creates new empty javascript object
// than it make this to point to the object
// finally return object from Circle function
const circle = new Circle(1);
