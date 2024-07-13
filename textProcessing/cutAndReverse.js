function cutAndReverse(string) {
    const stringAsArray = string.split("");
    stringAsArray.splice(stringAsArray.length / 2, 0, "/");
    const newString = stringAsArray.join("");
    const [first, second] = newString.split("/");

    const reversedFirst = first
        .split("")
        .reverse()
        .join("");
    const reversedSecond = second
        .split("")
        .reverse()
        .join("");

    console.log(reversedFirst);
    console.log(reversedSecond);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('--------------------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');