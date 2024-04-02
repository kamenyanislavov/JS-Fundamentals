function pyramidOfKingDjoser(base, increment) {

    let stoneBlocks = 0;
    let marbleBlocks = 0;
    let lapisBlocks = 0;
    let goldBlocks = 0;
    let stepsCounter = 0;
    let height = 0;

    for (let i = base; i >= 0; i -= 2) {
        let blocksPerStep = 0;
        let stepStoneBlocks = 0;
        let stepMarbleBlocks = 0;
        let stepLapisBlocks = 0;

        stepsCounter++

        blocksPerStep = (i * i) * increment;
        stepStoneBlocks = ((i - 2) * (i - 2)) * increment;
        stoneBlocks += stepStoneBlocks;

        if (stepsCounter % 5 == 0) {
            stepLapisBlocks = (blocksPerStep - stepStoneBlocks);
            lapisBlocks += stepLapisBlocks;
        } else {
            stepMarbleBlocks = (blocksPerStep - stepStoneBlocks);
            marbleBlocks += stepMarbleBlocks;
        }
    }
    if (base % 2 == 0) {
        stoneBlocks -= 4;
        goldBlocks += (4 * increment);
        stepsCounter -= 1;
    } else {
        stoneBlocks -= 1 * (increment);
        goldBlocks += Math.ceil(1 * increment);
    }

    if (stepsCounter == 1 && increment < 1) {
        height = Math.ceil(increment);
    } else {
        height = Math.floor(stepsCounter * increment);
    }

    console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks)}`);
    console.log(`Gold required: ${Math.ceil(goldBlocks * increment)}`);
    console.log(`Final pyramid height: ${height}`);
}

pyramidOfKingDjoser(23, 0.5)