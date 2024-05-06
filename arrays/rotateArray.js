function rotateArray(array) {

    let rotations = Number(array.pop());

    for (let i = 1; i <= rotations; i++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
console.log('-------------------');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
