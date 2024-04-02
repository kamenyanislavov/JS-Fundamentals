function vacation1(groupSize, typeOfGroup, day) {

    let price = 0;
    let totalSum = 0;

    switch (day) {

        case 'Friday':
            if (typeOfGroup == 'Students') {
                price = 8.45;
            } else if (typeOfGroup == 'Business') {
                price = 10.90;
            } else {
                price = 15;
            }
            break;

        case 'Saturday':
            if (typeOfGroup == 'Students') {
                price = 9.80;
            } else if (typeOfGroup == 'Business') {
                price = 15.60;
            } else {
                price = 20;
            }
            break;

        case 'Sunday':
            if (typeOfGroup == 'Students') {
                price = 10.46;
            } else if (typeOfGroup == 'Business') {
                price = 16;
            } else {
                price = 22.50;
            }
            break;
    }

    totalSum = groupSize * price;

    if (groupSize >= 30 && typeOfGroup == 'Students') {
        totalSum *= 0.85;
    }

    if (groupSize >= 100 && typeOfGroup == 'Business') {
        totalSum -= 10 * price
    }

    if (groupSize >= 10 && groupSize <= 20 && typeOfGroup == 'Regular') {
        totalSum *= 0.95;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}

function vacation(groupSize, typeOfGroup, day) {
    let price = 0;
    let totalSum = 0;

    if (day == 'Friday') {
        if (typeOfGroup == 'Students') {
            price = 8.45;
        } else if (typeOfGroup == 'Business') {
            price = 10.90;
        } else {
            price = 15;
        }
    } else if (day == 'Saturday') {
        if (typeOfGroup == 'Students') {
            price = 9.80;
        } else if (typeOfGroup == 'Business') {
            price = 15.60;
        } else {
            price = 20;
        }
    } else {
        if (typeOfGroup == 'Students') {
            price = 10.46;
        } else if (typeOfGroup == 'Business') {
            price = 16;
        } else {
            price = 22.50;
        }
    }

    totalSum = groupSize * price;

    if (groupSize >= 30 && typeOfGroup == 'Students') {
        totalSum *= 0.85;
    }

    if (groupSize >= 100 && typeOfGroup == 'Business') {
        totalSum -= 10 * price
    }

    if (groupSize >= 10 && groupSize <= 20 && typeOfGroup == 'Regular') {
        totalSum *= 0.95;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")
vacation(300, "Business", "Friday")