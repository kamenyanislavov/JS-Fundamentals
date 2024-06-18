function orbitOfStar(array) {

    const columns = array[0];
    const rows = array[1];
    x = array[2];
    y = array[3];
    let theStar = 1
    let net = [];

    if (x > 0) {
        let current = null;
        for (let i = x; i >= 0; i--) {
            current += 1;
            net.splice(x, 0, current);
        }
        current = null;
        for (let i = x + 1; i < rows; i++) {
            current += 1;
            net.push(current);
        }
        console.log(net.join(' '));
    }
}

orbitOfStar([4, 4, 0, 0]);
console.log('-----------------');
orbitOfStar([5, 5, 2, 2]);
console.log('-----------------');
orbitOfStar([3, 3, 2, 2]);