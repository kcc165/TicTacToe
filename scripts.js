const newPlayer = (name, piece) => {
    let score = 0;
    const getName = () => name;
    const getPiece = () => piece;
    const addPoint = () => score += 1;
    const getScore = () => score;
    return {getName, getPiece, addPoint, getScore};
};

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    let currentPlayer;
    const setPiece = (index, piece) => {
        if (board[index] !== ""){
            alert("Space occupied. Choose another space");
            
        }
        else{
           board[index] = piece;
           checkWin();

        }
        
    }
    const checkWin = (piece) => {
        winConditions.forEach((condition) => {
            if (board[condition[0]] === piece &&
                board[condition[1]] === piece && 
                board[condition[2]] === piece){

            }
            else{
                
            }
        })
    }

    

    return {setPiece};

})();

const uiController = (() => {
    const squares = document.querySelectorAll(".slot");
    const startScreen = document.querySelector("#start-screen");
    const boardScreen = document.querySelector("#board");
    const startButton = document.querySelector("#start");
    const startGame = (p1name, p2name) => {
        player1 = newPlayer(p1name, "X");
        player2 = newPlayer(p2name, "O");
        startScreen.setAttribute("style", "display: none;");
        boardScreen.setAttribute("style", "display: block;");
        
    }
    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            if (e.target.textContent === ""){
                e.target.textContent = "Works";
            }
            else{
               alert("Occupied. Choose another"); 
            }
        })
    })
    startButton.addEventListener("click", (e) => {
        if (e.path[1].children[1].value === "" ||
            e.path[1].children[3].value === ""){
                alert("Please fill in names for both players!")
            }
    })

    return {startGame}
})();
