function parkingLot(input) {

    //prepare the parking object
    const parking = {};
    // const carNumValidation = /(?<firstLetters>[A-Z]{2})(?<carNumber>\d{4})(?<lastLetters>[A-Z]{2})/g

    // loop through the lines of input
    for (let i = 0; i < input.length; i++) {

        //separate the direction from the car number
        let [direction, carNumber] = input[i].split(", ");

        //if direction is "IN", create a property with the car number and value "1", meaning it is in the parking
        
        if (!parking[carNumber] && direction === "IN") {
            parking[carNumber] = 1;

        //if direction is "OUT", change the value to "0", meaning the car is not in the parking any more
        } else if (parking[carNumber] && direction === "OUT") {
            delete parking[carNumber];
        }
    }

    //make a matrix from the parking obj so we can "clean" the empty slots and sort it
    let parkingAsArray = Object.entries(parking);

    // for (let i = 0; i < parkingAsArray.length; i++) {

    //     //delete all the car numbers that are not in the parking anymore
    //     if (parkingAsArray[i][1] === 0) {
    //         parkingAsArray.splice(i, 1)
    //         i--
    //     }
    // }

    //if the parking is empty
    if (parkingAsArray.length === 0) {

        //pring this message
        console.log("Parking Lot is Empty");

        //if it is not
    } else {

        //sort the cars ascending according to the number & print them after sorting
        
        // parkingAsArray.sort((a, b) => a[0].substring(2, 6) - b[0].substring(2, 6))
        
        parkingAsArray.sort((a,b) => a[0].localeCompare(b[0]));
        parkingAsArray.forEach(el => console.log(el[0]));

    }

}


parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
console.log("-----------------------");
parkingLot([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);