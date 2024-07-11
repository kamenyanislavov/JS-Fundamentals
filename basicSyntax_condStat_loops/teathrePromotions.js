function ticketPrices(day, age) {

    if (age < 0 || age > 122) {
        console.log('Error!');
    } else {
        let price = 0

        if (age <= 18) {
            switch (day) {
                case 'Weekday': price = 12;
                    break;

                case 'Weekend': price = 15;
                    break;

                case "Holiday": price = 5;
                    break;
            }
        } else if (age <= 64) {
            switch (day) {
                case 'Weekday': price = 18;
                    break;

                case 'Weekend': price = 20;
                    break;

                case "Holiday": price = 12;
                    break;
            }
        } else {
            switch (day) {
                case 'Weekday': price = 12;
                    break;

                case 'Weekend': price = 15;
                    break;

                case "Holiday": price = 10;
                    break;
            }
        }
        console.log(`${price}$`);
    }
}

ticketPrices('Weekday', 42)
ticketPrices('Holiday', -12)
ticketPrices('Holiday', 15)