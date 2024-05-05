function magicSum(numbers, magicSum) {

    let a;
    let b;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        a = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {

            b = numbers[j];
            sum = a + b;

            if (sum == magicSum) {
                console.log(`${a} ${b}`);
            }
        }

    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('-------------');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('--------------');
magicSum([1, 2, 3, 4, 5, 6], 6);