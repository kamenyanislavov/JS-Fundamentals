function stringValue(input) {

    const string = input[0];
    const condition = input[1];
    let sum = 0;

    // iterate the string
    for (let el of string) {

        // check if the condition is uppercase
        if (condition == "UPPERCASE") {

            //transform the string to uppercase
            string.toUpperCase();

            // if the current element is letter we add the ascii code to the sum
            if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
                sum += el.charCodeAt();
            }

            // if it is not uppercase, then it is lowercase
        } else {

            //transform the string to lowercase
            string.toLowerCase();

            // again, if the current element is letter, we add the ascii code to the sum
            if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
                sum += el.charCodeAt();
            }
        }
    }
    
    console.log(`The total sum is: ${sum}`);

}

stringValue(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);
console.log('------------------');
stringValue(['AC/DC',
    'UPPERCASE']);