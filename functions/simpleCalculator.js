function simpleCalculator(a, b, operator) {

    let result = operate(operator);

    return result;

    function operate(operator) {
        
        switch (operator) {
            case 'multiply':
                return a * b;
                break;
            case 'divide':
                return a / b;
                break;
            case 'add':
                return a + b;
                break;
            case 'subtract':
                return a - b;
                break;
        }
        
    }
}

console.log(simpleCalculator(5, 5, 'multiply'));
console.log('--------------------');
console.log(simpleCalculator(40, 8, 'divide'));
console.log('---------------------');
console.log(simpleCalculator(12, 19, 'add'));
console.log('-------------------');
console.log(simpleCalculator(50, 13, 'subtract'));