function replaceChars(input) {

    let inputAsArray = input.split("");

    for (let i = 1; i < inputAsArray.length; i++) {
        if (inputAsArray[i] == inputAsArray[i - 1]) {
            inputAsArray.splice(i,1);
            i = 0;
        }
    }

    console.log(inputAsArray.join(""));
}

replaceChars('aaaaabbbbbcdddeeeedssaa');
console.log('---------------');
replaceChars('qqqwerqwecccwd');