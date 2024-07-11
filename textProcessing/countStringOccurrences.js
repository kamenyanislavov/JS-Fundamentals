function countWordOccurrence(text, word) {

    const textAsArray = text.split(" ");
    let counter = 0;

    for (let el of textAsArray) {
        if (el == word) {
            counter++
        }
    }

    console.log(counter);
}

countWordOccurrence('This is a word and it also is a sentence',
    'is'
);
console.log('-----------------');
countWordOccurrence('softuni is great place for learning new programming languages',
    'softuni'
);