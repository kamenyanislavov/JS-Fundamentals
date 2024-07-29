function countWordAppearances(input) {

    const words = input.shift().split(" ")
    const wordsToTrack = {};

    for (let el of words) {
        wordsToTrack[el] = 0;
    }

    for (let i = 0; i < input.length; i++) {
        let currentWord = input[i];

        for (key in wordsToTrack) {
            if (key == currentWord) {
                wordsToTrack[key] += 1;
            }
        }
    }

    let sortable = Object.entries(wordsToTrack);
    sortable.sort((a, b) => b[1] - a[1]);

    sortable.forEach(el => console.log(`${el[0]} - ${el[1]}`));

}

countWordAppearances([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log("------------------------");
countWordAppearances([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);

// this - 3
// sentence - 2
// -----------------------
// the – 3
// is - 1
