function tseamAccount(array) {

    let account = array[0].split(' ');  // separate the account of games
    let isExisting = true;  // boolean for checking if given game exists in the account

    let i = 1;
    let currentPair = array[i];  // string containing command and name of game

    // looping the list of strings after the string containing the account
    while (currentPair != 'Play!') {
        let [command, game] = currentPair.split(' ');  // split the current pair of command and game
        let [gameName, expansion] = game.split('-');  // split the game name to prepare for expansion

        for (let i = 0; i < account.length; i++) {
            if (gameName == account[i]) {
                isExisting = true;
                if (command == 'Uninstall') {
                    account.splice(i, 1);
                    break;
                } else if (command == 'Update') {
                    account.splice(i, 1);
                    account.push(gameName);
                    break;
                }
                else if (command == 'Expansion') {
                    account.splice((i + 1), 0, `${account[i]}:${expansion}`);
                    break;
                } break;
            } else {
                isExisting = false;
            }
        }
        if (isExisting == false) {
            if (command == 'Install') {
                account.push(gameName);
            }
        }
        i++
        currentPair = array[i];
    }


    console.log(account.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);
console.log('------------------');
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);