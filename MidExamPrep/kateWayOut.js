function moveInMatrix(input) {

    const rows = input.shift();
    let moves = 0;


    for (let i = 0; i < input.length; i++) {
        let currentRow = input[i];
        let indexOfK = currentRow.search("k")
        let row = i;
        if (indexOfK != -1) {
            if (currentRow[indexOfK - 1] === " ") {
                currentRow = currentRow.replace(" ", "k");
                console.log(currentRow);
            }
        }
    }

    let name = "Kamen"
    name[1] = "J"
    let newName = name.replace("K", "B");
    console.log(newName);
    console.log(name);


}

moveInMatrix([
    4,
    "######",
    "##  k#",
    "## ###",
    "## ###"
]);
console.log('------------------');
moveInMatrix([
    5,
    "######",
    "##  k#",
    "## ###",
    "######",
    "## ###"
]);