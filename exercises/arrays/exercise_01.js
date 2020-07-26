const numbers = arrayFromRange(-10, -4);

function arrayFromRange(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

console.log(numbers);
