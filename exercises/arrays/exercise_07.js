const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// sort by rating descending
// Pick their title

function compute(array) {
  return array
    .filter((value) => {
      return value.year === 2018 && value.rating > 4;
    })
    .sort((prevValue, currentValue) => {
      if (prevValue.rating > currentValue.rating) return -1;
      if (prevValue.rating < currentValue.rating) return 1;
      else return 0;
    })
    .map((value) => {
      return value.title;
    });
}

console.log(compute(movies));
