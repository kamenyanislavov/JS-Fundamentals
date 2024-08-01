function listOfCompaniesAndUsers(input) {

    const listOfCompanies = {};

    for (let i = 0; i < input.length; i++) {
        const [companyName, employee] = input[i].split(" -> ");

        if (!listOfCompanies[companyName]) {
            listOfCompanies[companyName] = [];
            listOfCompanies[companyName].push(employee);
        } else {
            if (!listOfCompanies[companyName].includes(employee)) {
                listOfCompanies[companyName].push(employee);
            }
        }
    }
    let comanyListAsArray = Object.entries(listOfCompanies);

    let sortedComanyListAsArray = comanyListAsArray.sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < sortedComanyListAsArray.length; i++) {
        console.log(sortedComanyListAsArray[i][0]);
        for (let j = 0; j < sortedComanyListAsArray[i][1].length; j++) {
            console.log(`-- ${sortedComanyListAsArray[i][1][j]}`);
        }
    }
}

listOfCompaniesAndUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log("---------------------------");
listOfCompaniesAndUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);