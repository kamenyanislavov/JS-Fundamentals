function multiplicationTable(num) {

    result = 0;

    for (let i = 1; i <= 10; i++) {
        result = i * num;
        console.log(`${num} X ${i} = ${result}`);
    }
}

multiplicationTable(5)