function matchPhoneNumber(input) {

    const phonePattern = /\+359-2-[0-9]{3}-[0-9]{4}|\+359 2 [0-9]{3} [0-9]{4}/g;
    const validPhoneNumbers = [];
    let validNumber;

    while ((validNumber = phonePattern.exec(input)) !== null) {
        validPhoneNumbers.push(validNumber[0]);
    }

