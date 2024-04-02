function sumOfOdd1(n) {

    let sum = 0;

    for (let i = 1; i <= n * 2; i += 2) {

        sum += i;
        console.log(i);
    }

    console.log(`Sum: ${sum}`);

}

function sumOfOdd(n) {

    let sum = 0;
    let i = 1;

    while (i <= n * 2) {

        sum += i
        console.log(i);
        i += 2
    }

    console.log(`Sum: ${sum}`);
}

sumOfOdd(6)
sumOfOdd(12)
sumOfOdd(9)
sumOfOdd(5)
sumOfOdd(3)