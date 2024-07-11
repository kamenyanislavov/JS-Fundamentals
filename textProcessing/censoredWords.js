function replaceString(text, word) {

    let output = text
    const censoredWord = "*".repeat(word.length);

    while (output.includes(word)) {

        output = output.replace(word, censoredWord)

    }
    
    console.log(output);
}

replaceString('A small sentence with some words', 'small');
console.log('-----------------');
replaceString('Find the hidden word', 'hidden');