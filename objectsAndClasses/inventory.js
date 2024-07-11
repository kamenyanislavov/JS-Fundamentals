function listOfHeroes(array) {

    let heroes = [];
    array.forEach(element => {
        let [heroName, heroLevel, heroItems] = element.split(" / ");
        heroes.push({ name: heroName, level: Number(heroLevel), items: heroItems });
    });

    heroes.sort((a, b) => a.level - b.level);


    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })

}

listOfHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
console.log('-----------------------');
listOfHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);
