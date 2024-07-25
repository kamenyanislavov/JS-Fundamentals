function matchDate(input) {

    const datePattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    let validDate;

    while((validDate = datePattern.exec(input)) !== null){
        let day = validDate.