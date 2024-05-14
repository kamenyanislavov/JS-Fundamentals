function oddAndEvenSumOfNumber(number) {

    let numAsString = String(number);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        let currNum = Number(numAsString[i]);
        if (currNum % 2 == 1) {
            oddSum += currNum;
        } else {
            evenSum += currNum;
        }

    }


    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(oddAndEvenSumOfNumber(1000435));
console.log(oddAndEvenSumOfNumber(3495892137259234));
console.log(oddAndEvenSumOfNumber());