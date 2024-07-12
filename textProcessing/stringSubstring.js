function findWordInText(word, text) {

    const wordToUpper = word.toUpperCase();
    const textToUpper = text.toUpperCase();
    const textAsArray = textToUpper.split(" ");
    let isMissing = false;

    for (let el of textAsArray) {

        if (el == wordToUpper) {
            console.log(word);
            isMissing = false;
            break;
        } else {
            isMissing = true;
        }
    }

    if (isMissing) {
        console.log(`${word} not found!`);
    }

}

findWordInText('javascript',
    'JavaScript is the best programming language');
console.log('------------------');
findWordInText('python',
    'JavaScript is the best programming language');