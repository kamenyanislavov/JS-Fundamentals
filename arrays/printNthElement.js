function printhNthElement(array, step) {

    let outputArray = [];
    let stepAsNum = Number(array.pop());

    for (let i = 0; i < array.length; i += stepAsNum) {
        outputArray.push(array[i]);
    }

    console.log(outputArray.join(' '));
}

printhNthElement(['5', '20', '31', '4', '20', '2']);
printhNthElement(['dsa', 'asd', 'test', 'test', '2']);
printhNthElement(['1', '2', '3', '4', '5', '6']);