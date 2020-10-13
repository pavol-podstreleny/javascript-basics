
var skuska = "hi";
const message = "hi";


// Global scope accessible everywhere in functions below
// We should no define global variables / constants
const color = "red";

function start() {
  // Local variables take precendense over global
  const message = "rofl";
}

function stop() {
  const message = "bye";
}

start();
// Not accessible
console.log(message);
