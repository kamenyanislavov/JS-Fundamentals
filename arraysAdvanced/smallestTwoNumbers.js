function printTheTwoSmallestNumbers(array) {

    // array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {

        if (array[i] > array[i + 1]) {
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            i = -1;
        }
    }

    console.log(`${array[0]} ${array[1]}`);


}

printTheTwoSmallestNumbers([30, 15, 50, 5]);
console.log('-----------------------');
printTheTwoSmallestNumbers([3, 0, 10, 4, 7, 3]);