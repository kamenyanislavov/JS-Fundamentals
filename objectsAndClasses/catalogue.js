function catalogue(input) {

    // manipulate the input data to be ready for sort and print
    let catalogArr = [];

    input = input.sort((a, b) => a.localeCompare(b));

    for (let el of input) {
        let [product, price] = el.split(' : ')
        catalogArr.push({ product, price })
    }

    // sort the items in the catalogue
    // catalogArr.sort((a, b) => {
    //     if (Object.entries(a)[0] > Object.entries(b)[0]) {
    //         return 1;
    //     } else if (Object.entries(a)[0] < Object.entries(b)[0]) {
    //         return - 1;
    //     } else {
    //         return 0;
    //     }
    // });

    // print the items in groups
    for (let i = 0; i < catalogArr.length; i++) {

        if (catalogArr[i].product.charCodeAt(0) >= 65 && catalogArr[i].product.charCodeAt(0) <= 90) {
            if (i > 0) {
                if (catalogArr[i].product[0] == catalogArr[i - 1].product[0]) {
                    continue;
                }
            }
            console.log(catalogArr[i].product[0]);

            for (let j = 0; j < catalogArr.length; j++) {
                if (catalogArr[j].product[0] === catalogArr[i].product[0]) {
                    console.log(`  ${catalogArr[j].product}: ${catalogArr[j].price}`);
                } else {
                    continue;
                }
            }
        } else {
            continue;
        }

    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]

);
console.log('------------------');
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);
console.log('------------------');
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
    'Album : 123',
    'Altin Bash : 200'
]

);