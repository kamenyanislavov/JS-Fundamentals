function partyGuestList(input) {

    let guestList = [];

    for (let i = 0; i < input.length; i++) {

        let current = input[i].split(' ');

        let name = current[0];

        if (!current.includes('not')) {
            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (!guestList.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                guestList = guestList.filter(word => word != name);
            }
        }
    }

    for (guest of guestList) {
        console.log(guest);
    }
}

partyGuestList(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
console.log('----------------------');
partyGuestList(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);