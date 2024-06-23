function modifyArrayOfNumbers(input) {

    let arrayOfNumbers = input
        .shift()
        .split(' ');

    let i = 0;
    let tokens = input[i].split(' ');

    while (tokens != "Finish") {

        let action = tokens[0];

        switch (action) {
            case "Add":
                arrayOfNumbers.push(tokens[1]);
                break;

            case "Remove":
                if (arrayOfNumbers.indexOf(tokens[1]) != -1) {
                    arrayOfNumbers.splice(arrayOfNumbers.indexOf(tokens[1]), 1)
                }
                break;

            case "Replace":
                if (arrayOfNumbers.indexOf(tokens[1]) != -1) {
                    arrayOfNumbers.splice(arrayOfNumbers.indexOf(tokens[1]), 1, tokens[2]);
                }
                break;

            case "Collapse":
                for (let i = 0; i < arrayOfNumbers.length; i++) {
                    if (Number(arrayOfNumbers[i]) < Number(tokens[1])) {
                        arrayOfNumbers.splice(i, 1);
                        i = -1;
                    }
                }
                break;
        }


        i++
        tokens = input[i].split(' ');
    }

    console.log(arrayOfNumbers.join(' '));
}

// modifyArrayOfNumbers(["1 4 5 19",
//     "Add 1",
//     "Remove 4",
//     "Finish"]);
// console.log('--------------');
modifyArrayOfNumbers(["1 20 -1 10",
    "Collapse 8",
    "Finish"]);
console.log('-----------------');
// modifyArrayOfNumbers(["5 9 70 -56 9 9",
//     "Replace 9 10",
//     "Remove 9",
//     "Finish"]);