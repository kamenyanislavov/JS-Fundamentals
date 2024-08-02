function calculateResourcesQuantities(input) {

    const allResources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resouce = input[i];
        let quantity = Number(input[i + 1]);
        if (!allResources.hasOwnProperty(resouce)) {
            allResources[resouce] = quantity;
        } else {
            allResources[resouce] += quantity;
        }
    }

    for (const resource in allResources) {
        console.log(`${resource} -> ${allResources[resource]}`);
    }

}

calculateResourcesQuantities([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log("------------------------");
calculateResourcesQuantities([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);