function travelOrganizer(input) {

    const destinations = {};

    for (let i = 0; i < input.length; i++) {

        let [country, city, travelCost] = input[i].split(" > ");

        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = [];
            destinations[country][city] = travelCost;
        } else {
            if (!destinations[country].hasOwnProperty(city)) {
                destinations[country][city] = travelCost;
            } else {
                if (destinations[country][city] > travelCost) {
                    destinations[country][city] = travelCost;
                }
            }
        }
    }

    let countriesSortable = Object.entries(destinations);
    countriesSortable.sort((a, b) => a[0].localeCompare(b[0]));


    countriesSortable.forEach(([country, cities]) => {

        let result = `${country} -> `;

        const sortedCities = Object.entries(cities).sort(([, valueA], [, valueB]) => valueA.localeCompare(valueB));

        sortedCities.forEach(([city, value]) => {

            result += `${city} -> ${value} `;
        });

        console.log(result.trim());

    });
}

travelOrganizer([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
console.log("----------------------");
travelOrganizer([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);