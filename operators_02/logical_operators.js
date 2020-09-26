// Logical AND
// Returns TRUE if both operands are TRUE
console.log(true && true); // True
console.log(false && true); // False

// Logical OR
let highIncome = false;
let goodCreditSource = true;
let eligibleForLoan = highIncome || goodCreditSource;
console.log(eligibleForLoan); // True

// Not operator !
console.log(!eligibleForLoan);
