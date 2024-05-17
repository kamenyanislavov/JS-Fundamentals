function login(input) {

    let username = input[0];
    let password = '';

    for (let i = username.length - 1; i >= 0; i--) {

        password += username[i]

    }

    let guess = input[1]
    let i = 2;
    let attempt = 0;

    while (guess != password) {
        attempt++

        if (attempt >= 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log('Incorrect password. Try again.');
        guess = input[i];
        i++
    }

    if (guess == password && attempt <= 4) {

        console.log(`User ${username} logged in.`);

    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])
console.log('---------------');
login(['momo','omom'])
console.log('------------------');
login(['sunny','rainy','cloudy','sunny','not sunny']);