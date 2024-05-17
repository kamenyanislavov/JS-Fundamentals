function bicoinMining(input) {

    const bitcoinPrice = 11949.16;  // price per piece
    const goldPrice = 67.51;  // price per gram
    let counter = 0;
    let day = 0;
    let bitcoins = 0;
    let gold = 0;
    let total_gold = 0;
    let money = 0;

    // dig the gold during the shift
    for (let i = 0; i < input.length; i++) {
        gold = input[i];
        counter++
        
        // check if it is every third day, so someone has stolen 30% of our gain
        if (counter % 3 == 0) {
            total_gold += gold * 0.70;
        } else {
            total_gold += gold;
        }

        // convert the gold for money
        money = total_gold * goldPrice;

        while (bitcoins == 0) {
            day++
            break;
        }
        // buy the bitcoins and calculate the rest of the money
        bitcoins = Math.floor(money / bitcoinPrice);
        money -= bitcoins * bitcoinPrice;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

bicoinMining([100, 200, 300]);
console.log('------------------');
bicoinMining([50, 100]);
console.log('------------------');
bicoinMining([3124.15, 504.212, 2511.124]);