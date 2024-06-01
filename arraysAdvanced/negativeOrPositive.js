function sortNumbers1(array) {

    let sortedArray = [];

    for (num of array) {
        if (num < 0) {
            sortedArray.unshift(num);
        } else {
            sortedArray.push(num);
        }
    }

    for (num of sortedArray) {
        console.log(Number(num));
    }

}


sortNumbers(['7', '-2', '8', '9']);
console.log('---------------------');
sortNumbers(['3', '-2', '0', '-1']);