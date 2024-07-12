function extractFileName(string) {

    // transform the string from the input to an array
    const inputArr = string.split("\\");

    // take the file name with the extension
    const fileNameWithExtension = inputArr[inputArr.length - 1];

    // find where the extension starts
    const extensionStartIndex = fileNameWithExtension.lastIndexOf(".");
    
    const fileExtension = fileNameWithExtension.slice(extensionStartIndex + 1);
    const fileName = fileNameWithExtension.substring(0,extensionStartIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}

extractFileName('C:\\Internal\\training-internal\\Template.pptx');
console.log('--------------------');
extractFileName('C:\\Projects\\Data-Structures\\LinkedList.cs');
