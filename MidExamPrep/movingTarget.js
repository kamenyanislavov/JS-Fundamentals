function arrayManipulation(input) {

    let targets = input
        .shift()
        .split(' ')
        .map(Number);

    let i = 0;
    let tokens = input[i];

    while (tokens != "End") {
        let [command, index, value] = tokens.split(' ');

        switch (command) {
            case "Shoot":
                if (Number(index) >= 0 && Number(index) < targets.length) {
                    targets[Number(index)] -= Number(value);
                    if (targets[Number(index)] <= 0) {
                        targets.splice(Number(index), 1);
                    }
                }
                break;

            case "Add":
                if (Number(index) >= 0 && Number(index) < targets.length) {
                    targets.splice(Number(index), 0, Number(value));
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case "Strike":
                if (Number(index) - Number(value) < 0 || Number(index) + Number(value) >= targets.length ||
                    Number(index) < 0 && Number(index) >= targets.length) {
                    console.log("Strike missed!");
                } else {
                    targets.splice((Number(index) - Number(value)), (Number(value) * 2 + 1))
                }
                break;
        }


        i++
        tokens = input[i];
    }
    console.log(targets.join('|'));
}

arrayManipulation(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
console.log('-------------------');
arrayManipulation(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);