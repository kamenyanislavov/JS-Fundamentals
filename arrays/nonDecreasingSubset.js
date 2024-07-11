function nonDecreasingSubset(numbers) {

    let outputArray = [];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] >= max) {
            max = numbers[i];
            outputArray.push(numbers[i]);
        }
    }
    console.log(outputArray.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log('----------------');
nonDecreasingSubset([1, 2, 3, 4]);
console.log('------------------');
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);