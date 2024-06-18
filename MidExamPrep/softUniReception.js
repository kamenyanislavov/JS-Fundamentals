function timeCalculation(input) {

    

    const studentsPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let students = Number(input[3]);
    let time = 0;

    while (students > 0) {
        time++

        if (time % 4 == 0) {
            continue;
        } else {
            students -= studentsPerHour;
        }
    }
    console.log(`Time needed: ${time}h.`);
}

timeCalculation(['5', '6', '4', '20']);
console.log('--------------------');
timeCalculation(['1', '2', '3', '45']);
console.log('---------------------');
timeCalculation(['3', '2', '5', '40']);