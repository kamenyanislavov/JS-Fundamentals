function tripplesOfLatinLetters(n) {

    for (let num1 = 0; num1 < Number(n); num1++) {
        
        let letter1 = String.fromCharCode(97+num1);
        
        for (let num2 = 0; num2 < Number(n); num2++) {
        
            let letter2 = String.fromCharCode(97 + num2);
        
            for (let num3 = 0; num3 < Number(n); num3++) {
        
                let letter3 = String.fromCharCode(97+num3);
        
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }

}

tripplesOfLatinLetters('3');
console.log('--------------');
tripplesOfLatinLetters('2');
