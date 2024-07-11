function ladyBugs(array) {

    const fieldSize = array[0];
    let playField = [];
    let arrayLength = array.length;
    let allLadybugs = array[1].split(' ');
    let allLadybugsLength = allLadybugs.length;
    const isFull = 1;
    const isEmpty = 0;
    
    // build the playground and position the ladybugs
    for (let i = 0; i < fieldSize; i++) {
        
        playField.push(isEmpty);
        
        for (let j = 0; j < allLadybugsLength; j++) {
            if (allLadybugs[j] == i) {
                playField[i] = isFull;
            }
        }
        
    }
    
    let playfieldLength = playField.length;

    // take the moves one by one 
    for (let i = 2; i < arrayLength; i++) {
        let [position, direction, flight] = array[i].split(' ');

        if (flight == 0){
            continue;
        }
        // action acording to the instruction in the move
        for (let k = 0; k < playfieldLength; k++) {

            // checking if the position is inside the playground and there is ladybug there
            // if one of both is not true, nothing happens
            if (position == k && playField[k] == isFull) {

                // checking the direction
                if (direction == 'right') {
                    for (let l = k; l < playfieldLength; l += Number(flight)) {

                        // check if the flight is inside the playground. If not, the ladybug flies away
                        if (l + Number(flight) > playField.length - 1 || l + Number(flight) < 0) {
                            playField[k] = isEmpty;
                            break;
                        }
                        // check if the field is empty so the ladybug can land there
                        else if (playField[l + Number(flight)] == isEmpty) {
                            playField[k] = isEmpty;
                            playField[l + Number(flight)] = isFull;
                            break;
                        }
                    }
                    break;
                } else {

                    // check the same conditions for the other direction - to the left
                    for (let l = k; l >= 0; l -= Number(flight)) {
                        if (l - Number(flight) < 0 || l - Number(flight) > playField.length - 1) {
                            playField[k] = isEmpty;
                            break;
                        } else if (playField[l - Number(flight)] == isEmpty) {
                            playField[k] = isEmpty;
                            playField[l - Number(flight)] = isFull;
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
ladyBugs([5, '0 1 2', '0 right 1', '1 right 1', '2 right 1', '4 left 3', '3 left 3']);
console.log('---------------------------');
ladyBugs([5, '3', '3 left 2', '1 left -2']);
console.log('---------------------------');
ladyBugs([5, '0 2', '0 right 2', '2 right 2']);