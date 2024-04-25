function nextDay(year, month, day) {

    let date = new Date(year, month - 1, day);
    let oneDay = 60 * 60 * 24 * 1000;

    let tommorow = new Date(date.getTime() + oneDay);

    let y = tommorow.getFullYear();
    let m = tommorow.getMonth();
    let d = tommorow.getDate();
    console.log(`${y}-${m + 1}-${d}`);

}

nextDay(2016, 9, 30);
console.log('------------');
nextDay(2020, 3, 24);
console.log('-------------');
nextDay(2024, 4, 26);


