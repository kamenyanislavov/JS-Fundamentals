function biggestDivisor(number) {

    let divisors = [10, 7, 6, 3, 2];
    isDivisible = false;
    let divisor;

    for (let i = 0; i < divisors.length; i++) {
        divisor = divisors[i];

        if (number % divisor == 0) {
            isDivisible = true;
            break;
        }
    }
    if (isDivisible) {
        console.log(`The number is divisible by ${divisor}`);
    } else {
        console.log('Not divisible');
    }
}

biggestDivisor(30);
biggestDivisor(15);
biggestDivisor(12);
biggestDivisor(1643);