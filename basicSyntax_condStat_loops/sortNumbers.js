function sortNumbers1(n1, n2, n3) {

    if (n1 > n2 && n1 > n3) {
        console.log(n1);
        if (n2 > n3) {
            console.log(n2);
            console.log(n3);
        } else {
            console.log(n3);
            console.log(n2);
        }
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
        if (n1 > n3) {
            console.log(n1);
            console.log(n3);
        } else {
            console.log(n3);
            console.log(n1);
        }
    } else {
        console.log(n3);
        if (n1 > n2) {
            console.log(n1);
            console.log(n2);
        } else {
            console.log(n2);
            console.log(n1);
        }
    }
}

function sortNumbers(n1, n2, n3) {

    let numbers = [n1, n2, n3];

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let secondNumber = Number.MIN_SAFE_INTEGER;
    let thirdNumber = Number.MIN_SAFE_INTEGER

    while (numbers.length != 0) {

        currentNumber = numbers.shift();
        if (currentNumber > maxNumber) {
            thirdNumber = secondNumber;
            secondNumber = maxNumber;
            maxNumber = currentNumber;
        } else if (currentNumber > secondNumber) {
            thirdNumber = secondNumber;
            secondNumber = currentNumber;
        } else {
            thirdNumber = currentNumber
        }
    }
    console.log(maxNumber);
    console.log(secondNumber);
    console.log(thirdNumber);

}

sortNumbers(2, 1, 3);
console.log('------------');
sortNumbers(-2, 1, 3);
console.log('------------');
sortNumbers(0, 0, 2);