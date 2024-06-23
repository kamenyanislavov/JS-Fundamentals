function experienceGaining(input) {

    const experienceNeeded = input.shift();
    const battlesCount = input.shift();
    let gainedExperience = 0;
    let battlesPassed = 0;

    for (let i = 0; i < input.length; i++) {

        battlesPassed++

        if (battlesPassed % 3 === 0) {
            gainedExperience += input[i] * 1.15;
        } else if (battlesPassed % 15 === 0) {
            gainedExperience += input[i] * 1.05;
        } else if (battlesPassed % 5 === 0) {
            gainedExperience += input[i] * 0.9;
        } else {
            gainedExperience += input[i];
        }

    }

    if (gainedExperience >= experienceNeeded) {
        console.log(`Player successfully collected his needed experience for ${battlesPassed} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(experienceNeeded - gainedExperience).toFixed(2)} more needed.`);
    }

}

experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    30])
);
console.log('---------------');
experienceGaining(([500,
    5,
    50,
    100,
    200,
    100,
    20])
);
console.log('-----------------');
experienceGaining(([400,
    5,
    50,
    100,
    200,
    100,
    20])
);