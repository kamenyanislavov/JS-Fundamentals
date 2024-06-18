function memoryGame(input) {

    let playground = input
        .shift()
        .split(' ')

    let i = 0;
    let command = input[i]
    let currentMove = 0;

    while (command != 'end') {

        currentMove++

        let current = command
            .split(' ')
            .map(Number);
        let index1 = current[0];
        let index2 = current[1];

        if (!playground[index1] || !playground[index2] || index1 == index2) {
            playground.splice(playground.length / 2, 0, `-${currentMove}a`, `-${currentMove}a`)
            console.log("Invalid input! Adding additional elements to the board");
        } else {
            if (playground[index1] !== playground[index2]) {
                console.log("Try again!");
            } else {
                console.log(`Congrats! You have found matching elements - ${playground[index1]}!`);
                if (index1 > index2) {
                    playground.splice([current[0]], 1);
                    playground.splice([current[1]], 1);
                } else {
                    playground.splice([current[0]], 1);
                    playground.splice([current[1]] - 1, 1);
                }

                if (playground.length == 0) {
                    console.log(`You have won in ${currentMove} turns!`);
                    break;
                }

            }
        }


        i++
        command = input[i];
    }

    if (playground.length > 0) {
        console.log(`Sorry you lose :(
${playground.join(' ')}`);
    }


}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
);
console.log('-------------------');
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);
console.log('---------------------');
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);