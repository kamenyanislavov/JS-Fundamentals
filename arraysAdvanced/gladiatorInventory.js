function manipulateArray(input) {
    let inventory = input
        .shift()
        .split(' ');

    for (row of input) {
        let current = row.split(' ')
        let command = current[0];
        let element = current[1].split('-');

        if (inventory.includes(element[0])) {

            switch (command) {

                case 'Trash':
                    inventory.splice(inventory.indexOf(element[0]), 1);
                    break;

                case 'Repair':
                    inventory.splice(inventory.indexOf(element[0]), 1);
                    inventory.push(element[0]);
                    break;

                case 'Upgrade':
                    inventory.splice(inventory.indexOf(element[0]) + 1, 0, `${element[0]}:${element[1]}`)
                    break;
            }
        } else {
            switch (command) {
                case 'Buy':
                    inventory.push(element[0]);
                    break;
            }
        }

    }


    console.log(inventory.join(' '));

}

manipulateArray(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);
console.log('-----------------');
manipulateArray(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);