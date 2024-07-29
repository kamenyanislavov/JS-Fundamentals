function oddOccurrences(str) {

    let strAsArray = str.split(" ");
    let obj = {};

    for (let el of strAsArray) {
        el = el.toLowerCase();
        if (el in obj) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }

    let newArray = Object.entries(obj);
    newArray.sort((a, b) => b[1] - a[1]);
    let result = [];

    for (let el of newArray) {
        if (el[1] % 2 !== 0) {
            result.push(el[0]);
        }
    }

    console.log(result.join(" "));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log("--------------------");
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');