function manipulateArray(array, manipulator) {

    // manipulator contains "bomb" and its power
    // find the bomb in the array and destroy it together with the number of elements
    // to its left and right equal to the power of the bomb

    const bomb = manipulator[0];
    const bombPower = manipulator[1];

    // detonate the bomb
    while (array.includes(bomb)) {
        if (array.indexOf(bomb) - bombPower < 0) {
            array.splice(0, (bombPower * 2 + 1) - (array.indexOf(bombPower) + bombPower - 1));
        } else {
            array.splice((array.indexOf(bomb) - bombPower), bombPower * 2 + 1);
        }
    }
    
    // calculate the sum of the elements left in the array
    let sum = 0;

    array.forEach(el => sum += el);

    console.log(sum);

}

manipulateArray([1, 2, 2, 4, 2, 2, 2, 9], [1, 2]);
console.log('-----------------');
manipulateArray([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log('-------------------');
manipulateArray([1, 7, 7, 1, 2, 3], [7, 1]);
console.log('---------------------');
manipulateArray([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);