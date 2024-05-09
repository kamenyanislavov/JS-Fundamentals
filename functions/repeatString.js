function repeatString1(str, times) {

    return str.repeat(times);
}

function repeatString(str, times) {

    let output = '';

    for (let i = 1; i <= times; i++) {
        output += str;
    }
    return output;
}

console.log(repeatString("abc", 3));
console.log('----------------');
console.log(repeatString("String", 2));
console.log('--------------');
console.log(repeatString('Duran', 2));