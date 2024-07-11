function spiralMatrix(a, b) {

    let numberOfElements = a * b;
    let elements = [];
    for (let i = 1; i <= numberOfElements; i++) {
        elements.push(i);
    }
    console.log(elements);
}

spiralMatrix(5, 5);
console.log('-------------');
spiralMatrix(3, 3);
console.log('-------------');
spiralMatrix(4, 4);