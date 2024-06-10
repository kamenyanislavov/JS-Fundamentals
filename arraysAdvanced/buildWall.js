function calculateCost(input) {

    // sort the input and calculate how many days will be needed for finishing the entire wall
    input.sort((a, b) => a - b);
    const days = 30 - input[0];

    // prepare the array to collect the concrete used per day
    let concretePerDay = [];

    // prepare the variables necessary to calculate the total amount of concrete and money
    let totalConcrete = 0;
    let pesos = 0;


    // the first for loop iterates for the amount of total days
    for (let i = 1; i <= days; i++) {

        let concrete = 0;

        // the second for loop iterates through the mile-long sections of the wall
        for (let j = 0; j < input.length; j++) {

            let current = input[j];

            // ckeck if the section is high enough
            if (current >= 30) {
                continue;
            } else {
                concrete += 195;
                input.splice(j, 1, input[j] + 1);
            }
        }

        // record the daily amount of concrete in the new array
        concretePerDay.push(concrete);

    }

    // calculate the total amount of concrete used
    for (concrete of concretePerDay){
        totalConcrete += concrete
    }

    // calculate the money needed
    pesos = totalConcrete * 1900;

    // log the output
    console.log(concretePerDay.join(', '));
    console.log(`${pesos} pesos`);
}

calculateCost([21, 25, 28]);
console.log('--------------');
calculateCost([17]);
console.log('---------------');
calculateCost([17, 22, 17, 19, 17]);