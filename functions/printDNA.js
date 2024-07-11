function printDnaHelix(num) {

    const dna = 'ATCGTTAGGG'
    let counter = 0;
    let output = '';
    let first, second;
    let position = 0;

    for (let i = 1; i <= num; i++) {

        first = dna.charAt(position);
        second = dna.charAt(position + 1);
        position += 2;

        if (i == 1) {
            console.log('**' + first + second + '**');;
            counter++
        }

        if (i == 2 || i == 4) {
            console.log('*' + first + '--' + second + '*');
            counter++
        }

        if (i == 3) {
            console.log(first + '----' + second);
            counter++
        }

        if (i == 4) {
            i = 0;
        }

        if (counter == num) {
            break;
        }

        if (position == 10) {
            position = 0;
        }

    }


}

printDnaHelix(11);