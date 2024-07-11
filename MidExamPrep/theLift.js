function lift(input) {

    let peopleWaiting = Number(input[0]);
    let lift = input[1]
        .split(' ')
        .map(Number);
    let people = 0;

    for (let i = 0; i < lift.length; i++) {
        if (peopleWaiting >= 4) {
            people = 4 - lift[i];
        } else {
            people = peopleWaiting;
        }

        if ((peopleWaiting == 0 && lift.some((x) => x < 4)) || (lift.every((x) => x === 4) && peopleWaiting >= 0)) {
            break;
        }

        if (lift[i] < 4 && peopleWaiting >= 4) {
            lift.splice(i, 1, lift[i] += people)
            peopleWaiting -= people;
        } else {
            lift.splice(i, 1, lift[i] += people)
            peopleWaiting -= people;
        }

    }

    if (peopleWaiting > 0 && lift.every((x) => x === 4)) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!
        ${lift.join(' ')}`);
    } else if (lift.some(x => x < 4 && peopleWaiting === 0)) {
        console.log(`The lift has empty spots!
        ${lift.join(' ')}`);
    } else {
        console.log(lift.join(' '));
    }
}

lift([
    "16",
    "0 0 0 1"
]
);
console.log('----------------');
lift([
    "20",
    "0 2 0"
]
);