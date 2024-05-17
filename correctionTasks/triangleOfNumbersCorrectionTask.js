function triangleOfNumbers(n) {
    for (let curNum = 1; curNum < n; curNum++) {
        for (let numCount = 1; numCount < n; numCount++) {
            console.log(curNum);
        }
    }
}

// the first loom must continue until equal to 'n', otherwise it does't reach the upper end of the boundery.
// the nested loop must continue until the number of iterrations is equal to 'curNum' and not 'n'. 
// Otherwise it will print alway same number of digits, which will be one less than 'n'. Another problem is that
// evey loop it will pring the digit on new row. So the output is completly different.


triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);