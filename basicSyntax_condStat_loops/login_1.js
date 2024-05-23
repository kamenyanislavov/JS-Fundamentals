function passwordCheck(array) {

    let username = array[0];
    let attempts = 0;
    let isBlocked = false;
    let password = passwordFind(username);

    function passwordFind(username) {
        let password = '';

        for (let j = username.length - 1; j >= 0; j--) {
            password += username[j];
        }

        return password;
    }

    for (let i = 1; i < array.length; i++) {
        let guess = array[i];
        attempts++

        if (guess != password) {
            if (attempts == 4) {
                isBlocked = true;
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }

    if (isBlocked) {
        console.log(`User ${username} blocked!`);
    } else {
        console.log(`User ${username} logged in.`);
    }


}

passwordCheck(['Acer', 'login', 'go', 'let me in', 'recA']);
console.log('----------------');
passwordCheck(['momo', 'omom']);
console.log('-----------------');
passwordCheck(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);