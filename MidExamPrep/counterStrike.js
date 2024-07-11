function counterStrike(input) {

    let energy = Number(input.shift());
    let battlesWon = 0;



    for (let i = 0; i < input.length; i++) {
        let currentDistance = input[i];

        if (currentDistance == "End of battle") {
            console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
            break;
        }

        if (energy < Number(currentDistance)) {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            break;
        } else {
            energy -= Number(currentDistance);
            battlesWon++
        }

        if (battlesWon % 3 === 0) {
            energy += battlesWon;
        }


    }

}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
console.log('----------------');
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);
