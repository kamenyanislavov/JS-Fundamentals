function nXnMatrix(n) {

    let patern = String(`${n} `);
    let row = patern.repeat(n);

    for (let i = 1; i <= n; i++) {
        console.log(row);
    }
}

nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2);