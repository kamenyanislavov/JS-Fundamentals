function printAndSum(n1, n2) {

    let sum = 0;
    let print = '';

    for (let i = n1; i <= n2; i++) {
        print += `${i} `
        sum += i
    }

    console.log(print);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)
console.log('--------------');
printAndSum(0, 26)
console.log('--------------');
printAndSum(50, 60)