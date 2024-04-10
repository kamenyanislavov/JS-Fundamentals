function specialNumbers(number) {

    let isSpecial = 'False';


    for (let i = 1; i <= number; i++) {

        let sum = 0;
        let currentNum = String(i);

        for (let j = 0; j < currentNum.length; j++) {

            sum += Number(currentNum[j]);

        }

        if (sum == 5 || sum == 7 || sum == 11) {
            isSpecial = 'True';
        } else {
            isSpecial = 'False';
        }

        console.log(`${currentNum} -> ${isSpecial}`);
    }
}

specialNumbers(15)
console.log('---------------------');
specialNumbers(20)
