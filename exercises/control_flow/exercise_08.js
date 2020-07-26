function sum(limit) {
  //return sum of multiples 3 or 5
  let actualSum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      actualSum += i;
    }
  }
  return actualSum;
}

console.log(sum(10));
