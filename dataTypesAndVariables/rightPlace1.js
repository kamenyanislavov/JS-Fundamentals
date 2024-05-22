function stringCompare(str1, char, str2) {

    // replace char in str1
    function replaceCharInString(str1, char) {

        let result = '';

        for (let index = 0; index < str1.length; index++) {
            if (str1[index] === '_') {
                result += char;
            } else {
                result += str1[index];
            }
        }
        return result;
    }
    
    let newString = replaceCharInString(str1, char);

    // compare both strings and return the result

    if (newString === str2) {
        return 'Matched'
    } else {
        return 'Not Matched'
    }

}

console.log(stringCompare('Str_ng', 'I', 'Strong'));
console.log(stringCompare('Str_ng', 'i', 'String'));