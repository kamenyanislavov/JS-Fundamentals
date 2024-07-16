function sumOfAsciiCodes(input) {

    const start = input[0].charCodeAt();
    const end = input[1].charCodeAt();
    const string = input[2];
    let sum = 0;

    for (let el of string) {
        if (el.charCodeAt() > start && el.charCodeAt() < end) {
            sum += el.charCodeAt();
        } else if (el.charCodeAt() > end && el.charCodeAt() < start) {
            sum += el.charCodeAt();
        }
    }

    console.log(sum);

}

sumOfAsciiCodes(['.',
    '@',
    'dsg12gr5653feee5']
);
console.log('---------------------');
sumOfAsciiCodes(['?',
    'E',
    '@ABCEF']
);
console.log('----------------------');
sumOfAsciiCodes(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
);