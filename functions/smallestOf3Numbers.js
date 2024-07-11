function smallestOf3Num(num1, num2, num3) {

    let smallest = num1;
    let numbers = [num1, num2, num3];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;

}

console.log(smallestOf3Num(2, 5, 3));
console.log(smallestOf3Num(600, 342, 123));
console.log(smallestOf3Num(25, 21, 4));
console.log(smallestOf3Num(2, 2, 2));