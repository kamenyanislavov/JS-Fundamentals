function weekDay(index) {

    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if ((index >= 1 && index <= 7) && index % 1 == 0) {
        console.log(day[index - 1]);
    } else {
        console.log('Invalid day!');
    }

}

weekDay(3.3);
weekDay(6);
weekDay(11);
weekDay(-2);