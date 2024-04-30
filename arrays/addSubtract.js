function addSubtract(arr) {

    let arrSum = 0;
    let newArrSum = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        arrSum += arr[i];

        if (arr[i] % 2 == 0) {
            newArr[i] = arr[i] + i;
        } else {
            newArr[i] = arr[i] - i;
        }

        newArrSum += newArr[i];
    }

    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}

addSubtract([5, 15, 23, 56, 35]);
addSubtract([-5, 11, 3, 0, 2]);
addSubtract([0, 1, 3, 2, ]);