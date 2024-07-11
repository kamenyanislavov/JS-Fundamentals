function numbersAboveAverage(input) {

    // transform the input into array of numbers to work with
    let arrayOfNumbers = input
        .split(' ')
        .map(Number)

    // prepare an array for the output
    let result = [];

    // loop through the input and push every number greater than the average
    for (number of arrayOfNumbers) {
        if (number > average(arrayOfNumbers)) {
            result.push(number)
        }
    }

    // sort the result array in descending order
    result.sort((a, b) => b - a);

    // keep only the first 5 elements if they are more
    result.splice(5, (result.length - 5));

    // function to calculate the average
    function average(array) {
        let sum = 0;
        let average = 0;

        for (num of array) {
            sum += num;
        }

        average = sum / array.length

        return average;
    }

    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('No');
    }

}

numbersAboveAverage('10 20 30 40 50');
console.log('----------------------');
numbersAboveAverage('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('------------------------');
numbersAboveAverage('1');
console.log('---------------------------');
numbersAboveAverage('-1 -2 -3 -4 -5 -6');