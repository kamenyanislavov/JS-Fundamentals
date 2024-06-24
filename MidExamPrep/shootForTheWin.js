function shooting(input) {

    let targets = input
        .shift()
        .split(' ')
        .map(Number);

    let targetsShot = 0;

    let i = 0;
    let targetIndex = input[i];

    while (targetIndex != "End") {

        targetIndex = Number(targetIndex);
        let temp = targets[targetIndex];

        if (targetIndex >= 0 && targetIndex <= targets.length - 1) {
            targetsShot++
            for (let i = 0; i < targets.length; i++) {
                if (i !== targetIndex && targets[i] !== -1) {

                    if (targets[i] > temp) {
                        targets[i] -= temp;
                    } else if (targets[i] <= temp) {
                        targets[i] += temp;
                    }
                }
            }
            targets[targetIndex] = -1;

            i++
            targetIndex = input[i];
        } else {
            i++
            targetIndex = input[i];
            continue;
        }



    }
    console.log(`Shot targets: ${targetsShot} -> ${targets.join(' ')}`);
}

shooting(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
console.log('-----------------');
shooting(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);