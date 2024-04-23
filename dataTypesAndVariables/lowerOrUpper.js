function lowerOrUpper(char) {

    let isUpper = false;
    let result = '';

    if (char.toUpperCase() === char) {
        isUpper = true;
    }

    isUpper ? result = 'upper-case' : result = 'lower-case';
    console.log(result);

}

lowerOrUpper('L');
console.log('-----------');
lowerOrUpper('f');