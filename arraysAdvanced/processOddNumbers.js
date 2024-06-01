function processAndPrintReversedOddPositions(array) {

    let arrayFromOddPositions = []; // create a new array with the numbers from all odd positions


    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            arrayFromOddPositions.push(array[i]);
        }
    }


    let doubledArray = arrayFromOddPositions.map(x => x * 2); // process the new array

    // for (let i = 0; i < arrayFromOddPositions.length; i++){
    //     let el = arrayFromOddPositions[i] * 2;
    //     doubledArray.push(el)
    // }

    let reversedArray = doubledArray.reverse(); // reverse the processed array

    // for (let i = 0; i < doubledArray.length / 2; i++) {
    //     let temp = doubledArray[i];
    //     doubledArray[i] = doubledArray[doubledArray.length - 1 - i];
    //     doubledArray[doubledArray.length - 1 - i] = temp;
    // }

    console.log(reversedArray.join(' '));

}

processAndPrintReversedOddPositions([10, 15, 20, 25]);
console.log('-----------------------');
processAndPrintReversedOddPositions([3, 0, 10, 4, 7, 3]);