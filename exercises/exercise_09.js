const marks = [80, 80, 50];

function calculateGrate(marks) {
  let totalSum = 0;
  for (let mark of marks) {
    totalSum += mark;
  }
  let average = totalSum / marks.length;

  if (average >= 90) {
    return "A";
  } else if (average >= 80 && average <= 89) {
    return "B";
  } else if (average >= 70 && average <= 79) {
    return "C";
  } else if (average >= 60 && average <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrate([80, 80, 50]));
