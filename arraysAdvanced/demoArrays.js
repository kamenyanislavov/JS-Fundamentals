let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let array0 = [2, 4, 6];
let numbers = [];

array1.unshift(array0);
numbers.push(array1, array2, array3);

console.log(numbers[0][0][0]);
console.log(numbers[2][2] + numbers[0][0][0]);