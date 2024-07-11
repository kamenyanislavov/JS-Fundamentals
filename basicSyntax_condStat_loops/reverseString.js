function reverseString(input) {

    let toString = '';
    let reverse = '';

    if (typeof input != String(input)) {
        toString = String(input);
    } else {
        toString = input;
    }

    for (let i = (toString.length - 1); i >= 0; i--) {

        reverse += toString[i];
    }


    console.log(reverse);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString(1234);