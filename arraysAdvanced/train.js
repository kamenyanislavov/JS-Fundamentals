function manipulateArray(input) {

    let array = input[0]
        .split(' ')
        .map(Number);

    const maxCapacity = Number(input[1]); // elements of initial array cannot be bigger than this

    // manipulate the array with the incoming from the input commands

    for (let i = 2; i < input.length; i++) {

        let command = input[i].split(' ');

        // check if we must add new element to the array
        if (command[0] == 'Add') {
            array.push(Number(command[1]));

        // or increase an existing one without exceeding the maximum
        } else {

            let addNum = Number(command[0]);

            for (let i = 0; i < array.length; i++) {
                if ((array[i] + addNum) > maxCapacity) {
                    continue;
                } else {
                    array[i] += addNum;
                    break;
                }
            }
        }
    }

    console.log(array.join(' '));

}

manipulateArray(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
console.log('-------------------');
manipulateArray(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);