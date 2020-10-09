{
  var skuska = "hi";
  const message = "hi";
}

// Global scope accessible everywhere in functions below
// We should no define global variables / constants
const color = "red";

function start() {
  const message = "hi";
}

function stop() {
  const message = "bye";
}

// Not accessible
console.log(skuska);
