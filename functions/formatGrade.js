function formatGrage(grade) {

    let output = '';
    if (grade < 3) {
        output = `Fail (2)`
    } else if (grade < 3.50) {
        output = `Poor (${grade.toFixed(2)})`
    } else if (grade < 4.50) {
        output = `Good (${grade.toFixed(2)})`
    } else if (grade < 5.5) {
        output = `Very good (${grade.toFixed(2)})`
    } else {
        output = `Excellent (${grade.toFixed(2)})`
    }

    return output;
}

console.log(formatGrage(3.33));
console.log('----------');
console.log(formatGrage(4.50));
console.log('----------');
console.log(formatGrage(2.99));