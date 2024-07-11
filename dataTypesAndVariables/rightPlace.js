function rightPlace(str1, char, str2) {
    let res = str1.replace('_', char)
    let output = res === str2 ? 'Matched' : 'Not Matched';
    console.log(output);
}


rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
rightPlace('Ka_en', 21, 'Kamen');