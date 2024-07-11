function reverseNumbers1(n1, n2) {

    for (let i = n1; i >= n2; i--) {
        console.log(i);
    }

}

function reverseNumbers(n1, n2) {

    let i = n1;

    while (i >= n2) {
        console.log(i);
        i--
    }
}

reverseNumbers(6, 2)
console.log('-----------');
reverseNumbers(4, 1)