let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let array0 = [2, 4, 6];
let numbers = [];

array1.unshift(array0);
numbers.push(array1, array2, array3);

// console.log(numbers[0][0][0]);
// console.log(numbers[2][2] + numbers[0][0][0]);



const array = [14, 12, 44, 53, 21];

const index = 2;
const step = 5;
let newIndex = index;

if (index - step >= 0) {
    newIndex = index - step;
} else {
    for (let i = 1; i <= step; i++) {

        if (newIndex == 0) {
            newIndex = array.length - 1;
        } else {
            newIndex -= 1;
        
        }
    }
}
console.log(newIndex);




