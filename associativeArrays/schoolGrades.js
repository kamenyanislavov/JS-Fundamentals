function schoolGrades(array) {

    const journal = {};

    for (let el of array) {
        let currentStudent = el.split(" ");

        let name = currentStudent[0];

        for (let i = 1; i < currentStudent.length; i++) {
            let currentGrade = Number(currentStudent[i]);

            if (journal.hasOwnProperty(name)) {
                journal[name].push(currentGrade);
            } else {
                journal[name] = [];
                journal[name].push(currentGrade);
            }
        }
    }

    let entriesOfJournal = Object.entries(journal);

    entriesOfJournal.sort((a, b) => a[0].localeCompare(b[0]));


    for (let currentStudent of entriesOfJournal) {
        let name = currentStudent[0];
        let averageGrade = 0;
        let numberOfGrdes = currentStudent[1].length;

        for (let grade of currentStudent[1]){
            averageGrade += grade;
        }

        averageGrade /= numberOfGrdes;

        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }

}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
console.log('------------------');
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Steven 5 5 2',
    'Tammy 2 5 3',
    'Steven 6 3']
);