function ladyBugs(array) {

    const fieldSize = array[0];
    let playField = [];
    let allLadybugs = array[1].split(' ');
    let move = [];
    const isFull = 1;
    const isEmpty = 0;

    // build the playground and position the ladybugs
    for (let i = 0; i < fieldSize; i++) {

        playField.push(isEmpty);

        for (let j = 0; j < allLadybugs.length; j++) {
            if (allLadybugs[j] == i) {
                playField[i] = isFull;
            }
        }

    }


    let position, direction, flight;

    // take the moves one by one 
    for (let i = 2; i < array.length; i++) {
        move = array[i].split(' ');
        position = Number(move[0]);
        direction = move[1];
        flight = Number(move[2]);

        // action acording to the instruction in the move
        for (let k = 0; k < playField.length; k++) {

            // checking if the position is inside the playground and there is ladybug there
            // if one of both is not true, nothing happens
            if (position == k && playField[k] == isFull) {

                // checking the direction
                if (direction == 'right') {
                    for (let l = k; l < playField.length; l++) {

                        // check if the flight is inside the playground. If not, the ladybug flies away
                        if (l + flight > playField.length - 1 || l + flight < 0) {
                            playField[k] = isEmpty;
                            break;
                        } 
                        // check if the field is empty so the ladybug can land there
                        else if (playField[l + flight] == isEmpty) {
                            playField[k] = isEmpty;
                            playField[l + flight] = isFull;
                            break;
                        }
                    }
                    break;
                } else {

                    // check the same conditions for the other direction - to the left
                    for (let l = k; l >= 0; l--) {
                        if (l - flight < 0 || l - flight > playField.length - 1) {
                            playField[k] = isEmpty;
                            break;
                        } else if (playField[l - flight] == isEmpty){
                            playField[k] = isEmpty;
                            playField[l - flight] = isFull;
                            break;
                        }
                    }
                    break;
                }

            }
        }

    }


    console.log(playField.join(' '));

}

ladyBugs([3, '0 1', '0 right 1', '2 right 1']);
console.log('--------------------------');
ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
console.log('---------------------------');
ladyBugs([5, '3', '3 left 2', '1 left -2']);