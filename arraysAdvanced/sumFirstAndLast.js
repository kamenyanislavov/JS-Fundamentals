function sumFirstLast(arr) {

    const firstNum = Number(arr[0]);
    const lastNum = Number(arr[arr.length - 1]);

    console.log(firstNum + lastNum);

}

sumFirstLast(['20', '30', '40']);
console.log('--------------');
sumFirstLast(['5', '10']);