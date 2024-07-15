function manupulateNumbers(string) {

    const inputAsArray = string.split(" ");
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let sum = 0;

    for (let i = 0; i < inputAsArray.length; i++) {
       
        let current = inputAsArray[i];

        if (inputAsArray[i] == ""){
            continue;
        }else{
            current = inputAsArray[i].split("");
        }

        let start = current.shift();
        let end = current.pop();
        let number = Number(current.join(""));
        let positionOfFirst = 0;
        let positionOfLast = 0;

        for (let k = 0; k < alphabet.length; k++) {
            if (alphabet.includes(start)) {
                positionOfFirst = alphabet.indexOf(start) + 1;
                number *= positionOfFirst;
            } else if (alphabet.includes(start.toLowerCase())) {
                positionOfFirst = alphabet.indexOf(start.toLowerCase()) + 1;
                number /= positionOfFirst;
            }

            if (alphabet.includes(end)) {
                positionOfLast = alphabet.indexOf(end) + 1;
                number += positionOfLast;
            } else if (alphabet.includes(end.toLowerCase())) {
                positionOfLast = alphabet.indexOf(end.toLowerCase()) + 1;
                number -= positionOfLast;
            }

            if (positionOfFirst > 0 && positionOfLast > 0) {
                break;
            }
        }

        sum += number;
    }

    console.log(sum.toFixed(2));

}

manupulateNumbers('A12b s17G');
console.log('----------------');
manupulateNumbers('P34562Z q2576f   H456z');
console.log('------------------');
manupulateNumbers('a1A');