function convertToJSON(name, lastName, hairColor){

    let person = {
        name,
        lastName,
        hairColor
    }

    let output = JSON.stringify(person);

    console.log(output);
}

convertToJSON('George', 'Jones', 'Brown');
console.log('--------------------');
convertToJSON('Peter', 'Smith', 'Blond');