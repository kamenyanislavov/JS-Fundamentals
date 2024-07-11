function employessList(names) {

    class Employee {
        constructor(name, personalNumber) {
            name;
            personalNumber;

            this.name = name,
                this.personalNumber = personalNumber
        }
    }

    let listOfEmployees = [];

    for (let name of names) {
        let personalNumber = name.length;
        listOfEmployees.push(new Employee(name, personalNumber));
        console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
    }

}

employessList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
console.log('-----------------');
employessList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);