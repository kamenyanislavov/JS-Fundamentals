function pyramidOfKingDjoser(base, increment) {

    let stoneBlocks = 0;
    let marbleBlocks = 0;
    let lapisBlocks = 0;
    let goldBlocks = 0;
    let stepsCounter = 0;
    let height = 0;

    for (let i = base; i >= 1; i -= 2) {
        let blocksPerStep = 0;
        let stepStoneBlocks = 0;
        let stepMarbleBlocks = 0;
        let stepLapisBlocks = 0;

        stepsCounter++

        blocksPerStep = (i * i) * increment;
        stepStoneBlocks = ((i - 2) * (i - 2)) * increment;
        stoneBlocks += stepStoneBlocks;

        if (stepsCounter % 5 == 0) {
            stepLapisBlocks = (i * 2 + (i - 2) * 2) * increment;
            lapisBlocks += stepLapisBlocks;
        } else {
            stepMarbleBlocks = (i * 2 +(i - 2) * 2) * increment;
            marbleBlocks += stepMarbleBlocks;
        }
    }
    if (base % 2 == 0) {
        marbleBlocks -= (4 * increment);
        goldBlocks += (4 * increment);
    } else {
        stoneBlocks -= (1 * increment);
        goldBlocks += (1 * increment);
    }

    height = stepsCounter * increment;

    if (height < 1) {
        height = increment;
    } else {
        height = Math.floor(height);
    }

    console.log(`Stone required: ${Math.ceil(stoneBlocks)}`);
    console.log(`Marble required: ${Math.ceil(marbleBlocks)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisBlocks)}`);
    console.log(`Gold required: ${Math.ceil(goldBlocks * increment)}`);
    console.log(`Final pyramid height: ${height}`);
}

pyramidOfKingDjoser(23, 0.5)