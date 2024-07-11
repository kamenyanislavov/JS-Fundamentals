function spiceMustFlow(startingYield) {

    let daysCounter = 0;
    let extractedSpice = 0;

    while (startingYield >= 100) {

        daysCounter++
        extractedSpice += (startingYield - 26)

        startingYield -= 10;
    }

    if (extractedSpice >= 26) {
        extractedSpice -= 26;
    }
    
    console.log(daysCounter);
    console.log(extractedSpice);
}

spiceMustFlow(90);
console.log('-------------');
spiceMustFlow(450);