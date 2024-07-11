function printReceipt(prices) {

    const customerType = prices.pop();
    const pricesWithoutTax = prices.map(Number);
    let totalPriceNet = 0;

    for (const price of pricesWithoutTax) {
        if (price < 0) {
            console.log("Invalid price!");
            continue;
        } else {
            totalPriceNet += price;
        }


    }

    if (totalPriceNet == 0) {
        console.log("Invalid order!");
    } else {
        if (customerType == 'special') {
            console.log(`Congratulations you've just bought a new computer!
            Price without taxes: ${totalPriceNet.toFixed(2)}$
            Taxes: ${(totalPriceNet * 0.20).toFixed(2)}$
            -----------
            Total price: ${(totalPriceNet * 1.2 * 0.9).toFixed(2)}$`);
        } else {
            console.log(`Congratulations you've just bought a new computer!
            Price without taxes: ${totalPriceNet.toFixed(2)}$
            Taxes: ${(totalPriceNet * 0.20).toFixed(2)}$
            -----------
            Total price: ${(totalPriceNet * 1.2).toFixed(2)}$`);
        }
    }
}

printReceipt(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
);
console.log('--------------------');
printReceipt(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])
);
console.log('--------------------');
printReceipt(([
    'regular'
])
);