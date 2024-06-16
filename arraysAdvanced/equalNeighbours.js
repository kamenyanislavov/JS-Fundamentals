function findPairsIn2DMatrix(input) {

    let pairCount = 0;
    let inputLength = input.length;

    // we iterate through the arrays of input...
    for (let i = 0; i < inputLength; i++) {
        let currentArray = input[i];
        let currentArrayLength = currentArray.length;

        // ...and check each array's neighbour elements for equality
        for (let j = 0; j < currentArrayLength; j++) {
            if (currentArray[j] === currentArray[j - 1]) {
                pairCount++

                if (currentArray[j] === currentArray[j + 1]) {
                    pairCount++
                }
                j++
            }

        }
    }

    //we iterate through the arrays of input.......
    for (let i = 1; i < inputLength; i += 2) {
        let currentArray = input[i];
        let currentArrayLength = currentArray.length;

        // ... and check the previous and the next array in the matrix for equality of the element at the same position
        for (let j = 0; j < currentArrayLength; j++) {
            let previousArray = input[i - 1];
            let nextArray = input[i + 1];

            if (currentArray[j] === previousArray[j]) {
                pairCount++
            }
            if (i == inputLength - 1) {
                continue;
            } else {
                if (currentArray[j] === nextArray[j]) {
                    pairCount++
                }
            }

        }
    }

    return pairCount;
}

console.log(findPairsIn2DMatrix([
    ['2', '3', '5', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['3', '2', '5', '3', '4']
]));
console.log('--------------------');
// console.log(findPairsIn2DMatrix([
//     ['test', 'yo', 'yo', 'ho'],
//     ['well', 'done', 'no', '6'],
//     ['not', 'done', 'yet', '5']
// ]));
// console.log(findPairsIn2DMatrix([
//     ['2', '2', '5', '7', '4'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '5', '5', '5', '3']
// ]));