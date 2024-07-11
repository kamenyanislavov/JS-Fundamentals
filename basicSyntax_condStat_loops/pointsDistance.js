function pitagorus(x1, y1, x2, y2) {

    let a = x1 - x2;
    let b = y1 - y2
    let c = Math.sqrt(a * a + b * b);

    console.log(c);

}

pitagorus(2, 4, 5, 0);
pitagorus(2.34, 15.66, -13.55, -2.9985);
pitagorus(6, 2, 0, 4);