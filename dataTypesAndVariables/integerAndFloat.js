function typeOfNumber1(n1, n2, n3) {

    let sum = n1 + n2 + n3;
    let isInteger = false;

    if (sum % 1 == 0) {
        isInteger = true;
    }
    if (isInteger) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

function typeOfNumber(n1, n2, n3) {
    let sum = n1 + n2 + n3;

    sum % 1 == 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);

}

typeOfNumber(9, 100, 1.1)
console.log('----------------');
typeOfNumber(100, 200, 303)
