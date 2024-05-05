function maxSequence(array) {

    let counter = 0;
    let maxCounter = 0;
    let element = '';
    let newArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        
        if (array[i] == array[i + 1]) {

            counter++
            
        } else {
            counter = 0;           
        }

        if (counter > maxCounter) {
            if (array[i] != element && maxCounter != 0) {
                newArray = [array[i]];
            } 
            element = array[i];
            maxCounter = counter;
            newArray.push(element)
        } 
        
    }

    newArray.push(element);

    console.log(newArray.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('--------------');
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('----------------');
maxSequence([4, 4, 4, 4]);
console.log('---------------');
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);