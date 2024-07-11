function countWordOccurrences(array) {

    const dataCollector = new Map();

    for (let word of array) {
        if (dataCollector.has(word)) {
            let newCount = dataCollector.get(word) + 1;
            dataCollector.set(word, newCount)
        } else {
            let count = 1;
            dataCollector.set(word, count);
        }
    }

    let sortedDataCollector = new Map([...dataCollector.entries()].sort((a, b) => b[1] - a[1]));

    for (let entry of sortedDataCollector){
        console.log(`${entry[0]} -> ${entry[1]} times`);
    }
}

countWordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log();
countWordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);