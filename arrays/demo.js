const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

const list = fruits.entries();

let text = '';
for (let x of list) {
    text = x;
    console.log(text);
}


const ages = [32, [15, 33], 18, 41]
const newArr = ages.flatMap((x) => x * 2);

function checkAges(age){
    return age > 18
}

console.log(newArr);

console.log(ages.every(checkAges));
console.log(ages.filter(checkAges));

const vegetables = ['tomato', 'cucumber', 'pepper']

vegetables.fill('Garlic',1, 2)

console.log(vegetables);