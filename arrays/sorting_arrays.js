const numbers = [3, 1, 2];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "Javascript" },
];

courses.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA.name < nameB.name) return -1;
  if (nameA.name > nameB.name) return 1;
  return 0;
});
