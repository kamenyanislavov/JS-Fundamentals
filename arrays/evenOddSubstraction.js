function evenOddSubstraction(numbers) {

    let evenSum = 0;
    let oddSum = 0;

    for (num of numbers) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}

evenOddSubstraction([1, 2, 3, 4, 5, 6]);
evenOddSubstraction([3, 5, 7, 9]);
evenOddSubstraction([2, 4, 6, 8, 10]);