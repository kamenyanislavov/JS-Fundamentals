function lastDigit(number) {

    let digit = number % 10;
    let text = '';

    switch (digit) {
        case 1: text = 'one'; break;
        case 2: text = 'two'; break;
        case 3: text = 'three'; break;
        case 4: text = 'four'; break;
        case 5: text = 'five'; break;
        case 6: text = 'six'; break;
        case 7: text = 'seven'; break;
        case 8: text = 'eight'; break;
        case 9: text = 'nine'; break;

        default: text = 'zero';
    }
    console.log(text);
}

lastDigit(5120);
console.log('-------');
lastDigit(1);
console.log('--------');
lastDigit(1643);