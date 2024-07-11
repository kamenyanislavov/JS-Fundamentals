function lowerOrUpper(char) {

    let isUpper = false;
    let result = '';

    if (char.toUpperCase() === char) {
        isUpper = true;
    }

    isUpper ? result = 'upper-case' : result = 'lower-case';
    return result;

}

lowerOrUpper('L');
console.log('-----------');
lowerOrUpper('f');