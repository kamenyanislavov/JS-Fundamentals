function primeNumberChecker(number) {

    let isPrime = true;

    if (number > 3 && number != 5 && number != 7 && (number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 7 == 0)) {
        isPrime = false;
    }
    console.log(isPrime);
}

primeNumberChecker(7);
console.log('------');
primeNumberChecker(8);
console.log('----------');
primeNumberChecker(81);