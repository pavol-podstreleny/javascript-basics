const numbers = [1, 2, 3, 4];

const output = move(numbers, 2, -1);

console.log(output);

function move(array, index, offset) {
  const output = [...array];
  if (index > array.length - 1 || index < 0) {
    console.error("Wrong index");
    return;
  }

  if (index + offset > array.length - 1 || index + offset < 0) {
    console.error("Can not use this offset");
    return;
  }

  const removedItem = output.splice(index, 1);
  output.splice(index + offset, 0, ...removedItem);
  return output;
}
