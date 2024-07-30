function searchInList(input) {

    // create the list with guest
    const vipGuests = [];
    const regularGuests = [];
    let currentLine = input.shift();

    // loop till "PARTY" and separate the guest accordingly
    while (currentLine != "PARTY") {

        if (currentLine.charCodeAt(0) >= 48 && currentLine.charCodeAt(0) <= 57) {
            vipGuests.push(currentLine);
        } else {
            regularGuests.push(currentLine);
        }

        currentLine = input.shift();
    }

    // loop the list with guests who arrived
    for (let guest of input) {

        // if we find the guest in the VIP list, we remove it
        if (vipGuests.includes(guest)) {

            for (let i = 0; i < vipGuests.length; i++) {

                if (vipGuests[i] === guest) {
                    vipGuests.splice(i, 1);
                    break;
                }
            }

            //if we find the guest in the regular list, we remove it
        } else if (regularGuests.includes(guest)) {

            for (let i = 0; i < regularGuests.length; i++) {

                if (regularGuests[i] === guest) {

                    regularGuests.splice(i, 1);
                    break;
                }
            }
        }
    }

    // count the guests who are still in both lists (the ones that did not come)
    let guestCount = vipGuests.length + regularGuests.length;

    // print the output
    console.log(guestCount);
    if (vipGuests.length > 0) {
        vipGuests.forEach(el => console.log(el));
    }
    if (regularGuests.length > 0) {
        regularGuests.forEach(el => console.log(el));
    }
}

searchInList([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
console.log("---------------------");
searchInList([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);