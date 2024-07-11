function flightsSchedule(input) {

    let allFlights = [];
    let changedFlightes = [];

    for (let i = 0; i < input[0].length; i++) {
        allFlights.push(input[0][i].split(" "));
    }

    for (let i = 0; i < input[1].length; i++) {
        changedFlightes.push(input[1][i].split(" "));
    }

    class Flight {
        constructor(flightCode, destination) {
            this.flightCode = flightCode,
                this.destination = destination,
                this.status = "Ready to fly"
        }
    }

    // let flights = [];
    // for (let flight of allFlights) {
    //     let [flightCode, destination] = flight.split(" ");
    //     flights.push(new Flight(flights.flightCode = flightCode, flights.destination = destination));
    // }

    console.log(allFlights);
}

flightsSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);
console.log('-------------------');
flightsSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
);