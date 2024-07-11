function equalSums(numbers) {

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < numbers.length; i++) {

        leftSum = 0;
        rightSum = 0;

        if (i == 0) {
            leftSum = 0;
        } else {
            for (let j = 0; j < i; j++) {
                leftSum += numbers[j];
            }
        }

        if (i == (numbers.length - 1)) {
            rightSum = 0;
        } else {
            for (let k = i + 1; k < numbers.length; k++) {
                rightSum += numbers[k];
            }
        }


        if (leftSum == rightSum) {
            console.log(i);
            break;
        }
    }
    if (leftSum != rightSum){
        console.log('no');
    }
}

// function rightSum(numbers) {
//     let rightSum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         rightSum = 0;
//         // console.log(`${i} - ${numbers[i]}`);
//         for (let k = i + 1; k < (numbers.length); k++) {
//             if (i == (numbers.length - 1)) {
//                 rightSum = 0;
//             } else {
//                 rightSum += numbers[k];
//             }
//             // console.log(`${numbers[k]}`);
//         }
//         console.log(rightSum);

//     }
// }

// rightSum([1, 2, 3, 3]);
equalSums([1, 2, 3, 3]);
console.log('----------');
equalSums([1, 2]);
console.log('-----------');
equalSums([1]);
console.log('-------------');
equalSums([1, 2, 3]);
console.log('--------------');
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);