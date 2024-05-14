function pswdValidator(password) {

    let passwordLength = pswdLength(password);
    let lettersAndDigits = pswdOnlyLettersAndDigits(password);
    let twoDigits = pswdMinTwoDigits(password);

    // checking if the password has a valid length
    function pswdLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    // checking if the password consist of only digits and letters
    function pswdOnlyLettersAndDigits(password) {
        let result = ''
        for (let i = 0; i < password.length; i++) {
            let el = password[i];
            let elCode = el.charCodeAt();
            if ((elCode >= 48 && elCode <= 57) || (elCode >= 65 && elCode <= 90) || (elCode >= 97 && elCode <= 122)) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
        if (result == true) {
            return true;
        } else {
            return false;
        }
    }

    // checking if the password has at least two digits
    function pswdMinTwoDigits(password) {
        let counter = 0;
        for (let i = 0; i < password.length; i++) {
            let el = password[i];
            let elCode = el.charCodeAt();
            if (elCode >= 48 && elCode <= 57) {
                counter++
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    // deliver function output
    if (passwordLength && lettersAndDigits && twoDigits) {
        console.log('Password is valid');
    } else {
        if (!passwordLength) {
            console.log('Password must be between 6 and 10 characters');
        }

        if (!lettersAndDigits) {
            console.log('Password must consist only of letters and digits');
        }

        if (!twoDigits) {
            console.log('Password must have at least 2 digits');
        }
    }
}

pswdValidator('logIn');
console.log('-------------------');
pswdValidator('MyPass123');
console.log('--------------------');
pswdValidator('Pa$s$s');
