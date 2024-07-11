function signCheck(numOne, numTwo, numThree) {

    if ((numOne < 0 && numTwo < 0 && numThree > 0) || (numOne < 0 && numTwo > 0 && numThree < 0) || (numOne > 0 && numTwo < 0 && numThree < 0)) {
        return 'Positive';
    } else if (numOne > 0 && numTwo > 0 && numThree > 0) {
        return 'Positive';
    }else{
        return 'Negative';
    }

}

console.log(signCheck(5, 12, -15));
console.log('-----------------');
console.log(signCheck(-6, -12, 14));
console.log('-------------------');
console.log(signCheck(-1, -2, -3));
console.log('---------------------');
console.log(signCheck(-5, 1, 1));