function numberModification(number) {

    let numAsString = String(number);
    let avg = 0;
    let sum = 0;


    for (let i = 0; i < numAsString.length; i++) {

        sum += Number(numAsString[i]);

        if (i == (numAsString.length - 1)) {

            avg = sum / numAsString.length;

            if (avg > 5) {
                break;
            } else {
                numAsString += '9';
                i = -1;
                sum = 0;
            }
        }
    }

    console.log(Number(numAsString));
}

numberModification(101);
console.log('--------------');
numberModification(5835);
console.log('---------------');
numberModification(5556);