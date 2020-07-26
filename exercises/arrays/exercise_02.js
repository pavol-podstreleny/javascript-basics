const numbers = [1, 2, 3, 4];

function include(array, searchElement) {
  for (value of array) {
    if (value === searchElement) return true;
  }
  return false;
}

console.log(include(numbers, 5));
