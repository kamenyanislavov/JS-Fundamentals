function calculator(num1, opperator, num2) {

    let result = 0;

    switch (opperator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    }

    console.log(`${result.toFixed(2)}`);
    
}

calculator(5, '+', 10);
console.log('----------');
calculator(25.5, '-', 3);