function kNumberSequence(n, k) {
    // every element equals the sum of the previous k elements 
    // the sequence is n elements starting always with 1

    let result = [1];

    // create a loop which will repeat n times
    for (let i = 1; i < n; i++) {
        // every loop we set the sum to zero, so we can calculate the new array element
        let sum = 0;

        // we have a for cycle to calculate the k elements which form the new one to be added to the array.
        if (result.length < k) {
            for (let j = 0; j < result.length; j++) {
                let num = result[j];
                sum += num;
            }
        } else {
            for (let j = (result.length - 1); j >= result.length - k; j--) {
                let num = result[j];
                sum += num;
            }
        }
        result.push(sum)
    }

    console.log(result.join(' '));
}

kNumberSequence(6, 3);
console.log('--------------');
kNumberSequence(8, 2);