function printKElements(array) {

    const k = array[0];
    let resultStart = array.slice(1, k + 1)
    let resultEnd = array.slice(-k)

    console.log(resultStart.join(' '));
    console.log(resultEnd.join(' '));
}

printKElements([2, 7, 8, 9]);
console.log('----------------');
printKElements([3, 6, 7, 8, 9]);