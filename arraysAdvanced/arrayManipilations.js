function arrayManipulations(input) {

    // let array = input[0].split(' ')
    // array = array.map(Number);
    let array = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        // let currentElement = input[i].split(' ');
        // let command = currentElement[0];
        // let num1 = currentElement[1];
        // let num2 = currentElement[2];
        let [command, num1, num2] = input[i].split(' ');

        switch (command) {
            case 'Add': 
            array.push(Number(num1)); 
            break;
            
            case 'Remove': 
            array = array.filter(x => x !== Number(num1)); 
            break;
            
            case 'RemoveAt': 
            array.splice(Number(num1), 1); 
            break;
            
            case 'Insert': 
            array.splice(num2, 0, Number(num1));
            break;
        }

    }

    console.log(array.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
console.log('----------------');
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);