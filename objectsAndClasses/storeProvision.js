function localStore(currentStock, orderedStock) {

    for (let i = 0; i < orderedStock.length; i += 2) {
        let orderedProduct = orderedStock[i];
        let orderedQuantity = Number(orderedStock[i + 1]);

        if (currentStock.includes(orderedProduct)) {
            let index = currentStock.indexOf(orderedProduct);
            let productQty = Number(currentStock[index + 1]);
            productQty += orderedQuantity;
            currentStock.splice(index + 1, 1, productQty)
        } else {
            currentStock.push(orderedProduct);
            currentStock.push(orderedQuantity);
        }

    }
    let stockAfterDelivery = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        stockAfterDelivery.product = currentStock[i];
        stockAfterDelivery.productQuantity = currentStock[i + 1];
        console.log(`${stockAfterDelivery["product"]} -> ${stockAfterDelivery["productQuantity"]}`);
        // console.log(`${currentStock[i]} -> ${currentStock[i + 1]}`);
    }
}

localStore([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
console.log('------------------');
localStore([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);