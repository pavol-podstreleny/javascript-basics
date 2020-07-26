// Do block is executed at least once -> even condition is false
let i = 0;
do {
  if (i % 2 == 0) console.log(i);
  i++;
} while (i < 5);
