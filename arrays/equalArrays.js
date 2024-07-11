function equalArrays(nums1, nums2) {

    let sum = 0;
    let areIdentical = true;

    for (let i = 0; i < nums1.length; i++) {

        let a = Number(nums1[i]);
        let b = Number(nums2[i]);

            if (a != b) {
                areIdentical = false;
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                break;
            } else {
                sum += a;
            }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);