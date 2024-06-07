function arraySorting(array) {

    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i += 2) {
        let last = array.pop();
        array.splice(i, 0, last);
    }
    console.log(array.join(' '));
}

arraySorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
console.log('--------------------------------------');
arraySorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);