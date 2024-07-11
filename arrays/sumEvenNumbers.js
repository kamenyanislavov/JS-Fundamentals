function sumEvenNUmbers(numsAsStrings) {

    let sum = 0; // sum of even numbers only
    
    for (let i = 0; i < numsAsStrings.length; i++) {
        let num = Number(numsAsStrings[i]);

        if (num % 2 == 0) {
            sum += num;
        }
    }
    console.log(sum);
}

sumEvenNUmbers(['1', '2', '3', '4', '5', '6']);
sumEvenNUmbers(['3', '5', '7', '9']);
sumEvenNUmbers(['2', '4', '6', '8', '10']);