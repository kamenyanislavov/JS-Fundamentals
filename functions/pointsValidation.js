function pointsValidation(array) {

    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];
    let result = 0;

    result = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);

    if (Number.isInteger(result)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    result = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);

    if (Number.isInteger(result)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    result = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(result)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

pointsValidation([3, 0, 0, 4]);
console.log('--------------------');
pointsValidation([2, 1, 1, 1]);