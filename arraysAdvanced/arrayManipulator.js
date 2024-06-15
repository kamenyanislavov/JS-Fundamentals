function arrayManipulator(array, commands) {



    for (row of commands) {
        let current = row.split(' ')
        let command = current.shift();

        while (command != 'print') {

            switch (command) {

                case 'add':
                    let index = Number(current.shift());
                    array.splice(index, 0, Number(current[0]));
                    break;

                case 'addMany':
                    let index1 = Number(current.shift());
                    let currentAsNumber = current.map(Number);
                    array.splice(index1, 0, ...currentAsNumber)
                    break;

                case 'contains':
                    if (array.includes(Number(current[0]))) {
                        console.log(array.indexOf(Number(current[0])));
                    } else {
                        console.log(-1);
                    }
                    break;

                case 'remove':
                    array.splice(Number(current[0]), 1);
                    break;

                case 'shift':
                    let positions = Number(current[0]);
                    for (let i = 0; i < positions; i++) {
                        array.push(array.shift());

                    }
                    break;

                case 'sumPairs':
                    let newArray = array.slice(0);
                    array.splice(0, array.length);
                    if (newArray.length % 2 != 0) {
                        for (let i = 0; i < newArray.length - 1; i += 2) {
                            let sum = 0;
                            sum = newArray[i] + newArray[i + 1];
                            array.push(sum);
                        }
                        array.push(Number(newArray[newArray.length - 1]))
                    } else {
                        for (let i = 0; i < newArray.length; i += 2) {
                            let sum = 0;
                            sum = newArray[i] + newArray[i + 1];
                            array.push(sum);
                        }
                    }
                    break;
            }
            break;
        }

    }

    console.log(`[ ${array.join(', ')} ]`);

}

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['shift 3', 'add 1 8', 'contains 1', 'contains 3', 'print']);
// console.log('-----------------');
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
// console.log('-----------------');
arrayManipulator([2, 2, 4, 2, 4, 1],
    ['add 1 4', 'sumPairs', 'print']);
// console.log('-----------------');
// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
//     ['sumPairs', 'sumPairs', 'addMany 0 -1 -2 -3', 'print']);