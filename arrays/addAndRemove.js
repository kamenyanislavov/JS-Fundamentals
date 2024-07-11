function addAndRemove(commands) {

    let outputArray = [];

    for (let i = 0; i <= commands.length; i++) {
        let command = commands[i];

        if (command == 'add') {
            outputArray.push(i + 1);
        }
        if (command == 'remove') {
            outputArray.pop();
        }
    }
    if (outputArray.length == 0) {
        console.log('Empty');
    } else {
        console.log(outputArray.join(' '));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
console.log('-----------------');
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
console.log('-------------------');
addAndRemove(['remove', 'remove', 'remove']);