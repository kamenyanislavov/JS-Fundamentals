function maxNumber(array) {

    let i = 0;
    let num = 0;
    let newArr = [];
    
    while (array.length > 0) {
        
        isBigger = false;
        num = array.shift();

        for (let i = 0; i < array.length; i++) {
            if (num > array[i]) {
                isBigger = true;
                continue;
            } else {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            newArr.push(num);
        }
    }
    newArr.push(num);
    console.log(newArr.join(' '));
}

maxNumber([1, 4, 3, 2]);
console.log('------------');
maxNumber([14, 24, 3, 19, 15, 17]);
console.log('--------------');
maxNumber([41, 41, 34, 20]);
console.log('---------------');
maxNumber([27, 19, 42, 2, 13, 45, 48]);