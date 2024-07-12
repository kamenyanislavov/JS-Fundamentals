function replaceWordsInText(words, text) {

    const wordsArr = words.split(", ");
    const textArr = text.split(" ");

    for (let word of wordsArr) {
        let length = word.length;

        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i].length == length && textArr[i].includes("*")) {
                textArr.splice(i, 1, word);
                break;
            }
        }
    }

    console.log(textArr.join(" "));
}

replaceWordsInText('great',
    'softuni is ***** place for learning new programming languages'
);
console.log('-----------------');
replaceWordsInText('great, learning',
    'softuni is ***** place for ******** new programming languages'
);