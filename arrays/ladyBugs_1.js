function theFlightOftheLadybug(input) {

    let fieldSize = input.shift();
    let ladybugs = input
        .shift()
        .split(' ')
        .map(Number);
    let playground = [];
    
    
    for (let i = 0; i < fieldSize; i++) {
        if (ladybugs.includes(i)) {
            playground.push(1);
        } else {
            playground.push(0);
        }
    }
    
    for (let i = 0; i < input.length; i++) {
        
        let playgroundLength = playground.length;
        let [ladibug, direction, flight] = input[i].split(' ');
        ladibug = Number(ladibug);
        flight = Number(flight);

        if(flight == 0){
            continue;
        }

        if (!playground[ladibug] == 1 || !playground.includes(playground[ladibug])) {
            continue;
        } else {
            if (direction == 'right') {
                for (let i = ladibug; i < playgroundLength; i += flight) {
                    if (playground[i + flight] == 1) {
                        continue;
                    } else if (playground[i + flight] < playgroundLength || playground[i + flight] >= 0) {
                        playground[ladibug] = 0;
                        playground[i + flight] = 1;
                        break;
                    } else {
                        playground[ladibug] = 0;
                        break;
                    }
                }
            } else {
                for (let i = ladibug; i >= 0; i -= flight) {
                    if (playground[i - flight] == 1) {
                        continue;
                    } else if (playground[i - flight] >= 0 || playground[i + flight] < playgroundLength) {
                        playground[ladibug] = 0;
                        playground[i - flight] = 1;
                        break;
                    } else {
                        playground[ladibug] = 0;
                        break;
                    }
                }
            }
        }

    }

    console.log(playground.join(' '));
}

theFlightOftheLadybug([3, '0 1',
    '0 right 0',
    '2 right 1']
);
console.log('----------------');
theFlightOftheLadybug([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']
);
console.log('-----------------');
theFlightOftheLadybug([5, '3',
    '3 left 2',
    '1 left -2']
);