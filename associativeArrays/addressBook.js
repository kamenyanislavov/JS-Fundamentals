function addressBook(array) {

    const addressBook = {};

    for (let el of array) {
        const [name, address] = el.split(":");
        addressBook[name] = address;
    }

    const bookAsArray = Object.entries(addressBook);
    
    bookAsArray.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of bookAsArray) {
        console.log(`${name} -> ${address}`);
    }

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
console.log('------------------');
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);