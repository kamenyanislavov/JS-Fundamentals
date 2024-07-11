function mathPower1(number, power) {

    let result = Math.pow(number, power)

    return result
}

function mathPower(number, power) {

    let result = number * number;

    for (let i = 1; i < power - 1; i++) {
        result *= number ;
    }
    return result;
}

console.log(mathPower(2, 8));
console.log('---------------');
console.log(mathPower(3, 4));
console.log('----------------');
console.log(mathPower(5, 5));