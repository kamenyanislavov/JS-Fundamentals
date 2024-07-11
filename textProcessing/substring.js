function printSubstring(string, startIndex, characters) {

    let endIndex = startIndex + characters;

    console.log(string.substring(startIndex, endIndex));
}

printSubstring('ASentence', 1, 8);
console.log('------------------');
printSubstring('SkipWord', 4, 7);