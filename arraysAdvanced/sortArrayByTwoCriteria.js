function sortArrayTwoCriteria(input) {

    input
        .sort(function (a, b) {
            const word1 = a.toUpperCase();
            const word2 = b.toUpperCase();

            if (word1 > word2) {
                return 1;
            }
            if (word2 > word1) {
                return -1;
            }
            return 0;
        })
        .sort((a, b) => a.length - b.length);

    input.forEach(el => console.log(el));


}

sortArrayTwoCriteria(['alpha', 'beta', 'gamma']);
console.log('----------------------');
sortArrayTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('-------------------------');
sortArrayTwoCriteria(['test', 'Deny', 'omen', 'Default']);