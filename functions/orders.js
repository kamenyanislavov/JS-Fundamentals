function orders(product, pcs) {

    let order = prices(product) * pcs;

    return order.toFixed(2);

    function prices(product) {
    
        let price = null;
    
        switch (product) {
            case 'coffee':
                price = 1.50;
                break;
            case 'water':
                price = 1.00;
                break;
            case 'coke':
                price = 1.40;
                break;
            case 'snacks':
                price = 2.00;
                break;
        }
        return price;
    }
}


console.log(orders("water", 5));
console.log('----------------');
console.log(orders("coffee", 2));
console.log('-----------------');
console.log(orders('snacks', 15));