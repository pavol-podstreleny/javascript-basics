const person = {
  name: "Mosh",
  age: 30,
};

// Itterating through object properties
for (let key in person) {
  console.log(key + ":" + person[key]);
}

// Itterating through arrays
const colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(index, colors[index]);
}
