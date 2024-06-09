function arrayManipulation(array, manipulator) {

    const elementCount = manipulator[0];  // the number of elements we have to pick from array and create new array
    let newArray = [];
    const elementRemove = manipulator[1];  // the number of elements we must delete from new array
    const theNumber = manipulator[2];  // the number we search for

    // create the new aray by extracting the number of elements specified by the manipulator and return the new array
    // start from the first element
    function createNewArray(elementCount) {
        newArray = array.slice(0, elementCount);
        // for (let i = 0; i < elementCount; i++) {
        //     newArray.push(array[i]);
        // }
        return newArray;
    }

    // remove from the new array the number of element specified by manipulator
    // start from the first element
    function removeElFromNewArray(elementRemove) {
        createNewArray(elementCount).splice(0, elementRemove);
        return newArray;
    }

    // find the number we search for and count how many times it appears in the new array
    function findAndCount(theNumber) {
        let theNumberCount = 0
        for (let i = 0; i < removeElFromNewArray(elementRemove).length; i++) {
            if (removeElFromNewArray(elementRemove)[i] == theNumber) {
                theNumberCount++
            }
        }
        return theNumberCount;
    }

    console.log(`Number ${theNumber} occurs ${findAndCount(theNumber)} times.`);
}

arrayManipulation([5, 2, 3, 4, 1, 6], [5, 2, 3]);
console.log('----------------');
arrayManipulation([7, 1, 5, 8, 2, 7], [3, 1, 5]);