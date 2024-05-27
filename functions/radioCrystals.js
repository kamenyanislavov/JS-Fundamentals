function processingCrystals(input) {
    let goalThikness = input[0];
    i = 1;
    let initialThikness = input[i];
    let count = 0;

    while (i < input.length) {

        console.log(`Processing chunk ${initialThikness} microns`);

        // Cut process
        if (initialThikness / 4 >= goalThikness) {
            while (initialThikness >= goalThikness) {
                initialThikness /= 4;
                count++
                if (initialThikness / 4 < goalThikness - 1) {
                    break;
                }
            }

            console.log(`Cut x${count}`);

            initialThikness = Math.floor(initialThikness);

            console.log('Transporting and washing');
        }

        count = 0;

        // Lap process
        if (initialThikness * 0.8 >= goalThikness - 1) {
            while (initialThikness >= goalThikness) {
                initialThikness *= 0.8;
                count++
                if (initialThikness * 0.8 < goalThikness - 1) {
                    break;
                }
            }

            console.log(`Lap x${count}`);

            initialThikness = Math.floor(initialThikness);

            console.log('Transporting and washing');
        }

        count = 0;

        // Grind process
        if (initialThikness - 20 >= goalThikness - 1) {
            while (initialThikness >= goalThikness) {
                initialThikness -= 20;
                count++
                if (initialThikness - 20 < goalThikness - 1) {
                    break;
                }
            }

            console.log(`Grind x${count}`);

            initialThikness = Math.floor(initialThikness);

            console.log('Transporting and washing');
        }

        count = 0;

        // Etch process
        if (initialThikness - 2 >= goalThikness - 1) {
            while (initialThikness >= goalThikness) {
                initialThikness -= 2;
                count++
                if (initialThikness - 2 < goalThikness - 1) {
                    break;
                }
            }

            console.log(`Etch x${count}`);

            initialThikness = Math.floor(initialThikness);

            console.log('Transporting and washing');
        }

        count = 0;

        // X-ray process
        if (initialThikness == goalThikness) {
            console.log(`Finished crystal ${goalThikness} microns`);
        } else {
            initialThikness += 1;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${goalThikness} microns`);
        }
        i++
        initialThikness = input[i];
    }

}

processingCrystals([1000, 4000, 8100]);