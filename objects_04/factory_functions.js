// Factory Function produce objects
// If key and value is the same we can make
// radius: radius => radius,

// CamelNotation for naming
function createCircle(radius) {
  return {
    radius, // If key and value are the same we can use just radius, -> not radius: radius
    // Same as draw: function(){}
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);
