const numbers = [1, 2, 3, 4];
const cout = countOccurences(numbers, 10);

console.log(cout);

function countOccurences(array, searchElement) {
  let count = 0;

  for (value of array) {
    if (value === searchElement) count++;
  }

  return count > 0 ? count : -1;
}
