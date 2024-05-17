function roundNumber(number, precision) {

    if (precision > 15) {
        console.log(parseFloat(number.toFixed(15)));
    } else {
        console.log(parseFloat(number.toFixed(precision)));
    }

}

roundNumber(3.1415926535897932384626433832795, 20)
roundNumber(10.5, 3)
roundNumber(7.32384626433832795, 6)