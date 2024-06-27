function printObjectKeysAndValues(city) {

    let key = Object.keys(city);
    
    for (key in city){
        let value = city[key];

        console.log(`${key} -> ${value}`);
    }

}

printObjectKeysAndValues({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);
console.log('---------------------------');
printObjectKeysAndValues({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);