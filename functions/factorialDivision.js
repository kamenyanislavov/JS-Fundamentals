function factorialDivision(n1, n2) {

    let n1f = 1;
    let n2f = 1;

    for (let i = 1; i <= n1; i++) {
        n1f *= i
    }

    for (let i = 1; i <= n2; i++) {
        n2f *= i
    }

    console.log((n1f / n2f).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);