let player = 'X';
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let game = true;

turn = (index) => {
    let box = document.querySelector("#box" + index);
    if (box.innerHTML === "" && game === true) {
        box.innerHTML = player;
        if (player === "X") {
            player = "O";
            board[index - 1] = 1;
            document.querySelector(".player-turn").innerHTML = "Go Player 2";
            check(board);
        }
        else {
            player = "X";
            board[index - 1] = 2;
            document.querySelector(".player-turn").innerHTML = "Go Player 1";
            check(board);
        }
    }
}


check = (board) => {
    let draw = true;
    if (board[0] == board[1] && board[1] == board[2] && board[0] != 0) {
        alert("Player " + board[0] + " Wins");
        game = false;
    }
    else if (board[3] == board[4] && board[4] == board[5] && board[3] != 0) {
        alert("Player " + board[3] + " Wins");
        game = false;
    }
    else if (board[6] == board[7] && board[7] == board[8] && board[6] != 0) {
        alert("Player " + board[6] + " Wins");
        game = false;
    }
    else if (board[0] == board[3] && board[3] == board[6] && board[0] != 0) {
        alert("Player " + board[0] + " Wins");
        game = false;
    }
    else if (board[1] == board[4] && board[4] == board[7] && board[1] != 0) {
        alert("Player " + board[1] + " Wins");
        game = false;
    }
    else if (board[2] == board[5] && board[5] == board[8] && board[2] != 0) {
        alert("Player " + board[2] + " Wins");
        game = false;
    }
    else if (board[0] == board[4] && board[4] == board[8] && board[0] != 0) {
        alert("Player " + board[0] + " Wins");
        game = false;
    }
    else if (board[2] == board[4] && board[4] == board[6] && board[2] != 0) {
        alert("Player " + board[2] + " Wins");
        game = false;
    }
    else {
        game = true;
    }

    if (!game) {
        document.querySelector("#reset").style.display = "block";
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (board[i] === 0) {
            draw = false;
            break;
        }
    }

    if (draw) {
        alert("Game Draw");
        game = false;
    }

}

reset = () => {
    player = 'X';
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    game = true;
    document.querySelector(".player-turn").innerHTML = "Go Player 1";
    document.querySelector("#reset").style.display = "none";
    for (let i = 0; i < 9; i++) {
        let box = document.querySelector("#box" + (i + 1));
        box.innerHTML = "";
    }
}