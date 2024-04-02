function ages(age) {

    let person = '';

    if (age < 0) {
        console.log('out of bounds');
    } else {
        if (age <= 2) {
            person = 'baby';
        } else if (age <= 13) {
            person = 'child';
        } else if (age <= 19) {
            person = 'teenager';
        } else if (age <= 65) {
            person = 'adult';
        } else {
            person = 'elder';
        }
        console.log(person);
    }
}

// ·	0-2 (age) – is a baby;   
// ·	3-13 (age) – is a child; 
// ·	14-19 (age) – is a teenager;
// ·	20-65 (age) – is an adult;
// ·	>=66 (age) – is an elder; 

ages(20)
ages(5)
ages(40)
ages(90)
ages(-2)