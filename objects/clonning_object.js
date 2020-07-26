const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// takes properties and method from circle and copies on new object
const another = Object.assign({}, circle);

// Spread operator, takes all the properties and methods and puts into new object
const another = { ...circle };
