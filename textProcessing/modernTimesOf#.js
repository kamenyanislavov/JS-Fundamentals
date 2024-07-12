function findSpecialWords(input) {

    const textArr = input.split(" ");
    let isValid = false;

    for (let el of textArr) {
        if (el == "#") {
            continue;
        }

        if (el.startsWith("#")) {

            let word = el.substring(1);

            for (let char of word) {
                if ((char.charCodeAt() >= 97 && char.charCodeAt() <= 122) ||
                    (char.charCodeAt() >= 65 && char.charCodeAt() <= 90)) {
                    isValid = true;
                } else {
                    isValid = false;
                    break;
                }

            }
        } else {
            continue;
        }

        if (isValid) {
            console.log(el.substring(1));
        }
    }

}

findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('---------------------');
findSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');