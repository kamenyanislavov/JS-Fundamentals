function condenseToNum(numbers) {

    let output = '';

    while (numbers.length > 1) {
        let condensed = [];

        for (let i = 0; i < numbers.length - 1; i++) {

            condensed[i] = numbers[i] + numbers[i + 1];
        }

        numbers = condensed;
    }

    output = `${numbers}`
    
    return output;
}

condenseToNum([2, 10, 3]);
console.log('--------------');
condenseToNum([5, 0, 4, 1, 2]);
console.log('--------------');
condenseToNum([1]);