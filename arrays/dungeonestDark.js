function dungeonestDark(array) {

    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let newArray = array[0].split('|');

    for (let i = 0; i < newArray.length; i++) {
        let room = newArray[i].split(' ')

        if (room[0] == 'potion') {
            if ((health + Number(room[1])) >= 100) {
                console.log(`You healed for ${100 - health} hp.`);
            }else{
                console.log(`You healed for ${room[1]} hp.`);
            }
            health += Number(room[1]);
            if (health > 100) {
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);

        } else if (room[0] == 'chest') {
            console.log(`You found ${room[1]} coins.`);
            coins += Number(room[1]);
        } else {
            health -= Number(room[1]);
            if (health > 0) {
                console.log(`You slayed ${room[0]}.`);
            } else {
                console.log(`You died! Killed by ${room[0]}.`);
                console.log(`Best room: ${roomCounter + 1}`);
                break;
            }
        }
        roomCounter++
    }

    if (roomCounter == newArray.length) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log('----------------------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);