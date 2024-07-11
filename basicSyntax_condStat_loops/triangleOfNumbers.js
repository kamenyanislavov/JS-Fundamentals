function triangleOfNumbers(num) {

    let pattern = ``;

    for (let i = 1; i <= num; i++) {
        pattern = `${i} `;
        console.log(pattern.repeat(i));
    }

}

triangleOfNumbers(3)
triangleOfNumbers(5)
triangleOfNumbers(6)