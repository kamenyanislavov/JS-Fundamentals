function addSubstract(num1, num2, num3) {

    let sum = add(num1, num2);

    let substract = sum - num3;

    function add(num1, num2) {
        let result = num1 + num2;
        return result;
    }

    return substract;
}

console.log(addSubstract(23, 6, 10));
console.log(addSubstract(1, 17, 30));
console.log(addSubstract(42, 58, 100));