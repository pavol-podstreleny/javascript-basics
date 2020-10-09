const numbers = [3, 4];

//End
numbers.push(5, 6);
console.log(numbers); // [3,4,5,6]

//Beginning
numbers.unshift(1, 2);
console.log(numbers); // [1,2,3,4,5,6]

//Middle
// Starting position 2, number to delete 0, "a","b" to add
numbers.splice(2, 0, "a", "b");
console.log(numbers);
