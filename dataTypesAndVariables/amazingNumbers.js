function amazingNumber(num) {

    let isAmazing = false;
    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }

    let sumToString = String(sum)
    for (let j = 0; j < sumToString.length; j++) {
        if (sumToString[j] == 9) {
            isAmazing = true
        }
    }

    isAmazing ? num += ' Amazing? True' : num += ' Amazing? False';
    console.log(num);

}

amazingNumber(1233)
console.log('--------');
amazingNumber(999)
console.log('--------');
amazingNumber(991)
console.log('--------');
amazingNumber(27)