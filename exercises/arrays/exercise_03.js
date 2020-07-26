const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1]);

function except(array, excluded) {
  const arrayCopy = [...array];
  for (value of excluded) {
    while (arrayCopy.indexOf(value) != -1) {
      arrayCopy.splice(arrayCopy.indexOf(value), 1);
    }
  }
  return arrayCopy;
}

console.log(output);
