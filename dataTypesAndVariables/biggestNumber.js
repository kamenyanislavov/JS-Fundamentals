function biggestNum(n1, n2, n3) {

    let max = n1;

    if (n2 > n1 && n2 > n3) {
        max = n2;
    } else if (n3 > n1 && n3 > n2) {
        max = n3;
    }

    console.log(max);
    
}

biggestNum(-2, 7, 3);
biggestNum(130, 5, 99);
biggestNum(43, 43.2, 43.1);
biggestNum(2, 2, 2);