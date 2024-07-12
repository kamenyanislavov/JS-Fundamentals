function pascalCaseSplitter(string) {

    const stringAsArray = string.split("");

    for (let i = 1; i < stringAsArray.length; i++) {

        if (stringAsArray[i].charCodeAt() >= 65 && stringAsArray[i].charCodeAt() <= 90) {

            stringAsArray.splice(i, 0, "/");
            i++

        }

    }

    console.log(stringAsArray.join("").split("/").join(", "));
   
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('-----------------');
pascalCaseSplitter('HoldTheDoor');
console.log('-------------------');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');