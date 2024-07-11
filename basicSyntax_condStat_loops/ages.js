function ageGroupDetermination(age) {

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


ageGroupDetermination(20)
ageGroupDetermination(5)
ageGroupDetermination(40)
ageGroupDetermination(90)
ageGroupDetermination(-2)