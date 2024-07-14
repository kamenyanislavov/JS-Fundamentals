function generatePassword(input) {

    let base = input[0].concat(input[1]).split("");
    let moderator = input[2].split("");
    const vowels = ["a", "e", "o", "u", "i"];

    for (let i = 0; i < moderator.length; i++) {

        for (let j = 0; j < base.length; j++) {
            if (vowels.includes(base[j])) {
                base.splice(j, 1, moderator[i].toUpperCase());
                if (i === moderator.length - 1) {
                    i = -1;
                }
                break;
            }
        }

    }

    console.log(`Your generated password is ${base.reverse().join("")}`);

}

generatePassword([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);
console.log('--------------------');
generatePassword([
    'easymoneyeazylife',
    'atleasttencharacters',
    'absolute'
]);
console.log('-----------------------');
generatePassword([
    'areyousureaboutthisone',
    'notquitebutitrustyou',
    'disturbed'
]);