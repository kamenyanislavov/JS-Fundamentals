function chessBoard(n) {
    let result = '<div class="chessboard">\n';

    for (let i = 0; i < n; i++) {

        result += '  <div>\n';
        let row = '';

        for (let j = 0; j < n; j++) {
            let color = (i + j) % 2 ? 'white' : 'black';
            row += `    <span class="${color}"></span>\n`;

        }

        result += row;
        result += '  </div>\n';
    }

    result += '</div>'

    console.log(result);

}

chessBoard(3);
// chessBoard(8);