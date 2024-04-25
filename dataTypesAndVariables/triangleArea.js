function triangleArea(a, b, c) {

    let halfPerimeter = (a + b + c) / 2;
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));

    console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);