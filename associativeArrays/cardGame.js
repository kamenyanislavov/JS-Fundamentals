function cardGame(input) {

    const allPlayers = {};
    const playersCards = {};
    let newInput = [];

    //manipulate the input to be easier for calculations
    for (let el of input) {
        let newEl = el.replace(":", ",");
        newInput.push(newEl);
    }

    let player = newInput.shift().split(", ");

    newInput.push("1");

    // loop the manipulated input and populate the objects with players and payers's cards
    while (newInput.length > 0) {

        let playerName = player[0];

        player.splice(0, 1);

        if (!playersCards[playerName] && !allPlayers[playerName]) {
            allPlayers[playerName] = 0;
            playersCards[playerName] = player;
        } else {
            let existingCards = playersCards[playerName]
            playersCards[playerName] = existingCards.concat(player);
        }
        player = newInput.shift().split(", ")
    }

    // function to help remove the duplicate cards of each player if any
    function removeDuplicateCards(arr) {
        let uniqueCards = [];
        arr.forEach(el => {
            if (!uniqueCards.includes(el)) {
                uniqueCards.push(el);
            }
        });
        return uniqueCards;
    }

    // function removeDuplicates(arr) {
    //     let unique = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         if(!unique.includes(arr[i])){
    //             unique.push(arr[i]);
    //         }

    //     }
    //     return unique
    // }

    // remove the duplicate cards and calculate the result for each player
    for (player in playersCards) {
        playersCards[player] = removeDuplicateCards(playersCards[player]);

        playersCards[player].forEach(el => {
            let result = 0;
            let cards = el.split("");
            let powerOfCard;
            let typeOfCard;
            if (cards.length > 2) {
                powerOfCard = cards[0].concat(cards[1]);
                typeOfCard = cards[2];
            } else {
                powerOfCard = cards[0];
                typeOfCard = cards[1];
            }

            switch (typeOfCard) {

                case "S":
                    switch (powerOfCard) {

                        case "J":
                            result = 4 * 11;
                            allPlayers[player] += result;
                            break;

                        case "Q":
                            result = 4 * 12;
                            allPlayers[player] += result;
                            break;

                        case "K":
                            result = 4 * 13;
                            allPlayers[player] += result;
                            break;

                        case "A":
                            result = 4 * 14;
                            allPlayers[player] += result;
                            break;

                        default:
                            result = 4 * Number(powerOfCard);
                            allPlayers[player] += result;
                            break;
                    }
                    break;

                case "H":
                    switch (powerOfCard) {

                        case "J":
                            result = 3 * 11;
                            allPlayers[player] += result;
                            break;

                        case "Q":
                            result = 3 * 12;
                            allPlayers[player] += result;
                            break;

                        case "K":
                            result = 3 * 13;
                            allPlayers[player] += result;
                            break;

                        case "A":
                            result = 3 * 14;
                            allPlayers[player] += result;
                            break;

                        default:
                            result = 3 * Number(powerOfCard);
                            allPlayers[player] += result;
                            break;
                    }
                    break;

                case "D":
                    switch (powerOfCard) {

                        case "J":
                            result = 2 * 11;
                            allPlayers[player] += result;
                            break;

                        case "Q":
                            result = 2 * 12;
                            allPlayers[player] += result;
                            break;

                        case "K":
                            result = 2 * 13;
                            allPlayers[player] += result;
                            break;

                        case "A":
                            result = 2 * 14;
                            allPlayers[player] += result;
                            break;

                        default:
                            result = 2 * Number(powerOfCard);
                            allPlayers[player] += result;
                            break;
                    }
                    break;

                case "C":
                    switch (powerOfCard) {

                        case "J":
                            result = 1 * 11;
                            allPlayers[player] += result;
                            break;

                        case "Q":
                            result = 1 * 12;
                            allPlayers[player] += result;
                            break;

                        case "K":
                            result = 1 * 13;
                            allPlayers[player] += result;
                            break;

                        case "A":
                            result = 1 * 14;
                            allPlayers[player] += result;
                            break;

                        default:
                            result = 1 * Number(powerOfCard);
                            allPlayers[player] += result;
                            break;
                    }
                    break;


            }
        })
    }

    // print the output
    for (player in allPlayers) {
        console.log(`${player}: ${allPlayers[player]}`);
    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log("------------------------");
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);