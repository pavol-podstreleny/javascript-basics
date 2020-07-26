const numbers = [1, 2, 3, 4, 5];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length == 0) return;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

function getMax2(array) {
  if (array.length == 0) return;

  array.reduce((accumulator, current) => {
    if (current > accumulator) return current;
    return accumulator;
  });
}
