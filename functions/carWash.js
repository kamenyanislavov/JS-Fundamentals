function carWash(array) {
    
    let result = 0;
    
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command == 'soap') {
            result += 10
        } else if (command == 'water') {
            result *= 1.2
        } else if (command == 'vacuum cleaner') {
            result *= 1.25
        } else if (command == 'mud') {
            result *= 0.9
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);