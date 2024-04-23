function gladiatorExpenses(loses, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let counter = 0;

    for (let i = 1; i <= loses; i++) {

        if (i % 2 == 0 && i % 3 == 0) {
            counter++
            if (counter % 2 == 0) {
                expenses += (helmetPrice + swordPrice + shieldPrice + armorPrice);
            } else {
                expenses += (helmetPrice + swordPrice + shieldPrice);
            }
        } else if (i % 2 == 0) {
            expenses += helmetPrice;
        } else if (i % 3 == 0) {
            expenses += swordPrice;
        }

    }


    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7, 2, 3, 4, 5);
console.log('-----------');
gladiatorExpenses(23, 12.50, 21.50, 40, 200);