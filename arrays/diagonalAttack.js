function diagonalAttack(array) {

    let sum1 = 0;
    let sum2 = 0

    // calculate sum of first diagonal
    for (let i = 0; i < array.length; i++) {
        let currentEl = [array[i]];
        let currentArray = currentEl[0].split(' ');
        let elAsNum = Number(currentArray[i]);

        sum1 += elAsNum

        currentEl = [];
        currentArray = [];
        elAsNum = null;
    }

    // calculate sum of second diagonal
    for (let i = 0; i < array.length; i++) {
        let currentEl = [array[i]];
        let currentArray = currentEl[0].split(' ').reverse();
        let elAsNum = Number(currentArray[i]);

        sum2 += elAsNum

        currentEl = [];
        currentArray = [];
        elAsNum = null;
    }

    if (sum1 == sum2) {

        for (let i = 0; i < array.length; i++) {
            let currentEl = [array[i]];
            let currentArray = currentEl[0].split(' ');
            let currentArray1 = currentEl[0].split(' ').reverse();

            
            for (let j = 0; j < currentArray.length; j++) {
                if (j != i && j != (currentArray.length - 1 - i)) {
                    currentArray[j] = sum1;
                }
                
            }
            console.log(currentArray.join(' '));
            
            currentEl = [];
            currentArray = [];
            elAsNum = null;

        }

    } else {
        for (let i = 0; i < array.length; i++) {
            let currentEl = [array[i]];
            let currentArray = currentEl[0].split(' ');

            console.log(currentArray.join(' '));

            currentEl = [];
            currentArray = [];

        }
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
console.log('------------------');
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);
console.log('--------------------');
