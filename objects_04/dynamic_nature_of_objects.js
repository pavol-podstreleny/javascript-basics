const circle = {
  radius: 1,
};

// We can add property during run time
circle.color = "yellow";
circle.draw = function () {};

console.log(circle);

// We can delete properties using delete operator
delete circle.color;
delete circle.draw;

console.log(circle);
