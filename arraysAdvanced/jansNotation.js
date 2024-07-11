function operations(input) {

    // prepare an array to collect the operands (numbers)
    // and variable for the result after each operation
    let array = [];
    let result = null;

    // iterate through the elements of the input array
    for (let element of input) {
        
        // if it's type is number, we push it to the array with operands
        if (typeof element == "number") {
            array.push(element)
        
        // or, if it is operator, we execute the operation with the last two elements of the array with operands
        } else {
            if (array.length < 2) {
                console.log("Error: not enough operands!");
                return;
            } else {
                switch (element) {
                    case '+':
                        result = array.pop() + array.pop();
                        array.push(result);
                        break;

                    case '-':
                        result = array.splice(array.length - 2, 1) - array.pop();
                        array.push(result);
                        break;

                    case '/':
                        result = array.splice(array.length - 2, 1) / array.pop();
                        array.push(result);
                        break;

                    case '*':
                        result = array.pop() * array.pop();
                        array.push(result);
                        break;
                }
            }
        }

    }
    if (array.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(result);
    }
}

operations([3,
    4,
    '+']);
console.log('------------------');
operations([5,
    3,
    4,
    '*',
    '-']);
console.log('------------------');
operations([7,
    33,
    8,
    '-']);
console.log('------------------');
operations([15,
    '/']);
console.log('------------------');
operations([31,
    2,
    '+',
    11,
    '/']);
console.log('------------------');
operations([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);
