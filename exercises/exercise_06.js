function countTruthy(objArray) {
  let totalTruthy = 0;
  for (let value of objArray) {
    if (value) totalTruthy++;
  }
  return totalTruthy;
}

console.log(countTruthy(["1", false, 2, "", 5]));
