const body = document.querySelector(`body`);
const chessBoard = document.createElement(`div`);
chessBoard.style.width = `400px`;
chessBoard.style.height = `400px`;
chessBoard.style.display = `flex`;
chessBoard.style.border = `2px solid #000`;
chessBoard.style.flexDirection = `column`;
chessBoard.style.margin = `100px auto`;

function createOption(gridElement) {

    for (let i = 0; i < 8; i++) {
        const option = document.createElement(`div`);
        option.style.width = "50px";
        option.style.height = "50px";

        if (i % 2 == 0) {
            option.style.background = "#fff";
        } else {
            option.style.background = "#000";
        }
        rowElement.append(option);
        chessBoard.append(gridElement);

    }
}

function createRow(rowType) {
    const row = document.createElement(`div`);
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.flexWrap = "wrap";

    if (rowType == "reverse") {
        row.style.flexDirection = "row-reverse";
    }

    return row;
}

for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        createOption(createRow());
    } else {
        createOption(createRow("reverse"));
    }
}

body.append(chessBoard);