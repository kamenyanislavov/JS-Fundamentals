function reverseInPlace1(arr) {

    arr.reverse()

    console.log(arr.join(' '));

}

function reverseInPlace(arr) {

    for (let i = 0; i < (arr.length / 2); i++) {

        let c = '';
        let a = arr[i];
        let b = arr[arr.length - 1 - i];

        c = a;
        a = b;
        b = c;

        arr[i] = a;
        arr[arr.length - 1 - i] = c;

    }

    console.log(arr.join(' '));
}


reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);