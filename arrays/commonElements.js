function commonElements(arr1, arr2) {

    for (item of arr1) {

        for (items of arr2)
            if (item === items) {
                console.log(item);
            }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
console.log('----------');
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);
// commonElements();
