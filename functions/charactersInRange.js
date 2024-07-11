function charInRange(char1, char2) {

    let char1Code = char1.charCodeAt(0);
    let char2Code = char2.charCodeAt(0);
    let result = '';

    if(char1Code > char2Code){
        for (let i = char2Code + 1; i < char1Code; i++) {
            let currentChar = String.fromCharCode(i);
            result += `${currentChar} `;
        }  
    } else {
        for (let i = char1Code + 1; i < char2Code; i++) {
            let currentChar = String.fromCharCode(i);
            result += `${currentChar} `;
        }
    }

    return result
}

console.log(charInRange('a', 'd'));
console.log(charInRange('#', ':'));
console.log(charInRange('C', '#'));