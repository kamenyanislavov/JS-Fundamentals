function createObject(firstName, lastName, age) {

    let person = {
        firstName,
        lastName,
        age
    }

    return person;

}

console.log(createObject("Peter",
    "Pan",
    "20"
));
console.log('--------------');
console.log(createObject("George",
    "Smith",
    "18"
));