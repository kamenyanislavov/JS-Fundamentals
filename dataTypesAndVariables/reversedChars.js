function reversedChars(p1, p2, p3) {

    console.log(`${p3} ${p2} ${p1}`);

}

function reverOrderOfChar(ch1, ch2, ch3) {

    let array = [ch1, ch2, ch3];
    let output = ''

    for (let i = array.length - 1; i >= 0; i--) {
        output += `${array[i]} `;
    }

    return output;
}

reverOrderOfChar('A',
    'B',
    'C'
);
console.log('-----------');
reverOrderOfChar('1',
    'L',
    '&'
);