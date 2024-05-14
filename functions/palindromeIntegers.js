function palindromeIntegers(array) {

    
    for (let i = 0; i < array.length; i++) {
        let currentNum = String(array[i]);
        let isPalindrome = true;
        for (let j = 0; j < currentNum.length / 2; j++) {
            if (currentNum[j] != currentNum[(currentNum.length - 1 - j)]) {
                isPalindrome = false;
                break;
            }

        }
        if (isPalindrome == false) {
            console.log('false');
        } else {
            console.log('true');
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
console.log('---------------------------');
palindromeIntegers([32, 2, 232, 1010]);
