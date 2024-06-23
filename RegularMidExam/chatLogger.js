function chatLogger(input) {

    let chatHistory = [];

    let i = 0;
    let messages = input[i].split(' ');

    while (messages != 'end') {

        const command = messages.shift();

        switch (command) {
            case "Chat":
                chatHistory.push(messages[0]);
                break;

            case "Delete":
                if (chatHistory.includes(messages[0])) {
                    chatHistory.splice(chatHistory.indexOf(messages[0]), 1);
                }

                break;

            case "Edit":
                if (chatHistory.includes(messages[0])) {
                    chatHistory.splice(chatHistory.indexOf(messages[0]), 1, messages[1]);
                }

                break;

            case "Pin":
                if (chatHistory.includes(messages[0])) {
                    chatHistory.splice(chatHistory.indexOf(messages[0]), 1);
                    chatHistory.push(messages[0]);
                }
                break;

            case "Spam":
                for (let message of messages) {
                    chatHistory.push(message);
                }
                break;
        }

        i++
        messages = input[i].split(' ');
    }

    for (let message of chatHistory) {
        console.log(message);
    }

}

chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);
console.log('---------------');
chatLogger(["Chat Hi", "Chat Hello",
    "Delete John",
    "Pin Hi",
    "end"]);