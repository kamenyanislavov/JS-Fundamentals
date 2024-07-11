function phoneBook(array) {

    const phoneBook = {};

    for (let i = 0; i < array.length; i++) {
        let [name, phoneNumber] = array[i].split(" ");
        phoneBook[name] = phoneNumber;
    }

    const nameAndNumber = Object.entries(phoneBook);

    for(let [name, phoneNumber] of nameAndNumber){
        console.log(`${name} -> ${phoneNumber}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);
console.log('-----------------');
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);