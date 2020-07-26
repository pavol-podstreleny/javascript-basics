// number / 3 == Fizz
// number /5 == Buzz
// number /3 and 5 == FizzBuzz
// else number

function fizzBuzz(number) {
  if (typeof number != "number") return "Not a number";
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number;
  }
}

console.log(fizzBuzz(10));
