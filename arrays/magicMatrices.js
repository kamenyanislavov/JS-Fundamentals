function magicMatrices(rows) {

    let firstRow = rows[0];
    let firstRowSum = null;
    let isMagic = true;

    // calculate the first row sum to compare with
    for (let i = 0; i < rows.length; i++) {
        firstRowSum += firstRow[i];
    }

    // rows check
    for (let i = 0; i < rows.length; i++) {
        let currentRaw = rows[i];
        let rowSum = null;
        for (let j = 0; j < currentRaw.length; j++) {
            rowSum += currentRaw[j];
        }
        if (rowSum != firstRowSum) {
            isMagic = false;
            break;
        }
    }

    // columns check
    for (let i = 0; i < rows.length; i++) {
        let currentColumn = [];
        let columnSum = null;
        for (let j = 0; j < rows.length; j++) {
            currentColumn.push(rows[j][i]);
        }
        for (let k = 0; k < currentColumn.length; k++) {
            columnSum += currentColumn[k];
        }
        if (columnSum != firstRowSum) {
            isMagic = false;
            break;
        }
        currentColumn = [];
    }

    // print the result
    if (isMagic) {
        return ('true');
    } else {
        return ('false');
    }
}

console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log('---------------------');
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log('----------------------');
console.log(magicMatrices([[1, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]));