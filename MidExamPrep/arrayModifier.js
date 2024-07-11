function arrayModifier(input) {

    let array = input
        .shift()
        .split(' ')
        .map(Number);

    let i = 0;
    let command = input[i];

    while (command != 'end') {

        let current = command.split(' ');

        let operation = current[0];
        let index1 = Number(current[1]);
        let index2 = Number(current[2]);

        switch (operation) {
            case 'swap':
                let temp = array[index1];
                array.splice(index1, 1, array[index2]);
                array.splice(index2, 1, temp);
                break;

            case 'multiply':
                let result = array[index1] * array[index2];
                array.splice(index1, 1, result);
                break;

            case 'decrease':
                array = array.map((x) => x - 1);
                break;
        }

        i++
        command = input[i];

    }

    console.log(array.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);
console.log('-------------------');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);