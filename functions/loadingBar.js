function loadingBar(num) {

    let status = num / 10;
    let symb1 = '%';
    let symb2 = '.';
    let pattern1 = symb1.repeat(status);
    let pattern2 = symb2.repeat(10 - status);

    if (status == 10) {
        console.log(`100% Complete!`);
        console.log('[%%%%%%%%%%]');
    } else {
        console.log(`${num}% [${pattern1}${pattern2}]`);
        console.log('Still loading...');
    }
}

loadingBar(30);
console.log('------------');
loadingBar(50);
console.log('-------------');
loadingBar(100);