function replaceWordsInText(input) {

    const letter = input[0];
    const words = input[1];

    const letterAsArray = letter.split(" ");


    for (let i = 0; i < letterAsArray.length; i++) {

        let length = 0;

        if (letterAsArray[i].includes("_")) {
            if (letterAsArray[i].endsWith(".")) {

                length = letterAsArray[i].substring(0, letterAsArray[i].length - 1).length;

                for (let el of words) {
                    if (length == el.length) {
                        letterAsArray.splice(i, 1, el + ".");
                    }
                }
            } else if (letterAsArray[i].endsWith(",")) {

                length = letterAsArray[i].substring(0, letterAsArray[i].length - 1).length;

                for (let el of words) {
                    if (length == el.length) {
                        letterAsArray.splice(i, 1, `${el},`);
                    }
                }
            } else {

                length = letterAsArray[i].length;

                for (let el of words) {
                    if (length == el.length) {
                        letterAsArray.splice(i, 1, el);
                    }
                }
            }
        }
    }

    console.log(letterAsArray.join(" "));

}

replaceWordsInText(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);