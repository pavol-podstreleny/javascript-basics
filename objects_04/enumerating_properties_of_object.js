const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}

// For of loop can be used only with itterables
// Object is not itterable
// Object.keys() returns the array of keys
for (let key of Object.keys(circle)) {
  console.log(key);
}

// Object.entries returns array of key values pairs as array
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// If give property exists in give object
if ("radius" in circle) console.log("yes");
