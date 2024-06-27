function convertJSONToObject(input){

    let person = JSON.parse(input);

    for (let key in person){
        console.log(`${key}: ${person[key]}`);
    }

}

convertJSONToObject('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('----------------------');
convertJSONToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');