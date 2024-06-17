function matrixManipulation(sofiaMap, commands) {

    let sofiaMapAsMatrix = [];

    // prepare the map of Sofia as 2D matrix of arrays
    for (let i = 0; i < 5; i++) {
        let current = [];
        current = sofiaMap[i].split(' ');
        sofiaMapAsMatrix.push(current);
    }
    // transform the values in the form of numbers
    for (let i = 0; i < sofiaMapAsMatrix.length; i++) {
        let newArr = sofiaMapAsMatrix[i].map(Number);
        sofiaMapAsMatrix.splice(i, 1, newArr);
    }

    let commandsLength = commands.length;

    for (let i = 0; i < commandsLength; i++) {
        let tokens = commands[i].split(' ');
        let command = tokens[0];
        let commandValue = Number(tokens[1]);

        if (command == 'breeze') {
            let newArr = sofiaMapAsMatrix[commandValue].map(function (x) {
                if ((x - 15) < 0) {
                    x = 0
                } else {
                    x = x - 15
                }
                return x;
            });
            sofiaMapAsMatrix.splice(commandValue, 1, newArr);

        } else if (command == 'gale') {
            for (let i = 0; i < sofiaMapAsMatrix.length; i++) {
                if ((sofiaMapAsMatrix[i][commandValue] - 20) < 0) {
                    sofiaMapAsMatrix[i][commandValue] = 0;
                } else {
                    sofiaMapAsMatrix[i][commandValue] = sofiaMapAsMatrix[i][commandValue] - 20;
                }
            }
        } else if (command == 'smog') {
            for (let i = 0; i < sofiaMapAsMatrix.length; i++) {
                let newArr = sofiaMapAsMatrix[i].map(x => x + commandValue);
                sofiaMapAsMatrix.splice(i, 1, newArr);
            }
        }
    }
    let result = [];
    for (let i = 0; i < sofiaMapAsMatrix.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (sofiaMapAsMatrix[i][j] >= 50) {
                result.push(`[${i}-${j}]`)
            }
        }
    }
    if (result != "") {
        console.log('Polluted areas:', result.join(', '));
    } else {
        console.log('No polluted areas');
    }
}

matrixManipulation([
    '5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']);
console.log('--------------------');
matrixManipulation([
    '5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
console.log('---------------------');
matrixManipulation([
    '5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);