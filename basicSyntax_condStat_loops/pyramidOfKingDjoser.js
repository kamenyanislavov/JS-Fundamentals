function pyramidOfKingDjoser(base, increment) {

    let stoneBlocks = 0;
    let marbleBlocks = 0;
    let lapisBlocks = 0;
    let goldBlocks = 0;
    let stepsCounter = 0;
    let height = 0;

    for (let i = base; i > 0; i -= 2) {

        stepsCounter++

        stoneBlocks += ((i - 2) * (i - 2)) * increment;

        if (stepsCounter % 5 == 0) {
            lapisBlocks += (i * 4 - 4) * increment;
        } else {
            marbleBlocks += (i * 4 - 4) * increment;
        }
    }

    if (base % 2 == 0) {
        if (stepsCounter % 5 == 0) {
            lapisBlocks -= 4 * increment;
            goldBlocks += 4 * increment;
        } else {
            marbleBlocks -= 4 * increment;
            goldBlocks += 4 * increment;
        }
    } else {
        if (stepsCounter % 5 == 0){
            lapisBlocks -= 1 * increment;
            goldBlocks += 1 * increment;
        } else {
            stoneBlocks -= 1 * increment;
            goldBlocks += 1 * increment;
        }
    }

    height = Math.floor(stepsCounter * increment);

    console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks)}`);
    console.log(`Gold required: ${Math.ceil(goldBlocks * increment)}`);
    console.log(`Final pyramid height: ${height}`);
}

pyramidOfKingDjoser(11, 0.75)