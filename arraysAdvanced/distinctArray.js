function removeRepeats(array) {

    let filteredArray = []

    for (element of array) {
        if (!filteredArray.includes(element)) {
            filteredArray.push(element);
        }
    }

    

    console.log(filteredArray.join(' '));
}

removeRepeats([1, 2, 3, 4]);
console.log('-----------------');
removeRepeats([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log('-------------------');
removeRepeats([20, 8, 12, 13, 4, 4, 8, 5]);