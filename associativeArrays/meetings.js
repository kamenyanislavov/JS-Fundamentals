function meetings(array) {

    const shedule = {};

    for (const booked of array) {
        const [day, name] = booked.split(" ");

        if (shedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            shedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }

    for (const key in shedule) {
        console.log(`${key} -> ${shedule[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
console.log('---------------');
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);