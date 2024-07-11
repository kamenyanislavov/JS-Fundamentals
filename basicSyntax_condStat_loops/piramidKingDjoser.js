function resoursesForPyramid(base, increment) {

    let height = pyramidHeight(increment);
    let stone = pyramidStoneBlocks(base);
    let marble = pyramidMarbleBlocks(base);
    let lapisLazuli = pyramidLapisLazuliBlocks(base);
    let gold = pyramidGoldBlocks(base);

    function pyramidStoneBlocks(base) {
        let stoneBase = base - 2;
        let totalStone = 0;

        for (let i = stoneBase; i > 0; i -= 2) {
            totalStone += i * i * increment;
        }
        return Math.ceil(totalStone);
    }

    function pyramidMarbleBlocks(base) {
        let marbleBlocks = 0;
        let count = 0;

        for (let i = base; i > 2; i -= 2) {
            count++

            if (count % 5 != 0) {
                marbleBlocks += (i * 4 - 4) * increment;
            }
        }
        return Math.ceil(marbleBlocks);
    }

    function pyramidLapisLazuliBlocks(base) {
        let lapisLazuliBlocks = 0;
        let count = 0;

        for (let i = base; i > 2; i -= 2) {
            count++
            if (count % 5 == 0) {
                lapisLazuliBlocks += (i * 4 - 4) * increment;
            }
        }
        return Math.ceil(lapisLazuliBlocks);
    }

    function pyramidGoldBlocks(base) {
        let goldBlocks = 0;
        if (base % 2 == 0) {
            goldBlocks = 4 * increment;
        } else {
            goldBlocks = 1 * increment;
        }
        return Math.ceil(goldBlocks);
    }

    function pyramidLevelCount(base) {

        let levels = 0;

        for (let i = base; i > 0; i -= 2) {
            levels++
        }
        return levels;

    }

    function pyramidHeight(increment) {

        let height = pyramidLevelCount(base) * increment;

        return Math.floor(height);
    }

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapisLazuli}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}

resoursesForPyramid(11, 1);
console.log('----------------');
resoursesForPyramid(11, 0.75);
console.log('------------------');
resoursesForPyramid(12, 1);
console.log('-------------------');
resoursesForPyramid(23, 0.5);
console.log('---------------------');
resoursesForPyramid(5, 2);