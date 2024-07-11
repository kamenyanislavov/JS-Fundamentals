function storage(array) {

    const storage = new Map();

    for (let el of array) {
        const [item, quantity] = el.split(" ");
        if (storage.has(item)) {
            let newQuantity = Number(storage.get(item)) + Number(quantity);
            storage.set(item, newQuantity);
        } else {
            storage.set(item, quantity);
        }
    }

    for(let el of storage){
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
console.log('-----------------');
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
);