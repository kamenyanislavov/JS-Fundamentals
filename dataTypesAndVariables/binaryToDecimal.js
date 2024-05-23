function binaryToDecimal(binary) {

    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
        decimal += Number(binary[i]) * (2 ** (binary.length - 1 - i));
    }

    return decimal;

}

binaryToDecimal('00001001');
console.log('---------------');
binaryToDecimal('11110000');