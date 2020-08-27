const newPlayer = (name, piece) => {
    let score = 0;
    const getName = () => name;
    const getPiece = () => piece;
    const addPoint = () => score += 1;
    const getScore = () => score;
    return {getName, getPiece, addPoint, getScore};
};
let currentPlayer = 1;
const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    
    
    const setPiece = (index, piece) => {
        if (board[index] !== ""){
            alert("Space occupied. Choose another space");
            
        }
        else{

            if (currentPlayer = 1){
                board[index] = playerArr[0].getPiece();
            }
            else if (currentPlayer = 2){
                board[index] = playerArr[1].getPiece();
            }
            
            checkWin();

        }
        
    }
    const checkWin = (piece) => {
        winConditions.forEach((condition) => {
            if ((board[condition[0]] === piece &&
                board[condition[1]] === piece && 
                board[condition[2]] === piece)){

            }
            else{
               if (currentPlayer = 1){
                   currentPlayer = 2;
               } 
               else if (currentPlayer = 2){
                   currentPlayer = 1;
               }
            }
        })
    }

    

    return {setPiece};

})();
const playerArr = [];
const uiController = (() => {
    const squares = document.querySelectorAll(".slot");
    const startScreen = document.querySelector("#start-screen");
    const boardScreen = document.querySelector("#board");
    const startButton = document.querySelector("#start");

    
    const startGame = (p1name, p2name) => {
        let player1 = newPlayer(p1name, "X");
        let player2 = newPlayer(p2name, "O");
        playerArr.push(player1);
        playerArr.push(player2);
        startScreen.setAttribute("style", "display: none;");
        boardScreen.setAttribute("style", "display: block;");
        
    }
    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            if (e.target.textContent === ""){
                console.log(e);
                e.target.textContent = playerArr[currentPlayer - 1].getPiece();
                gameBoard.setPiece(parseInt(e.target.id), playerArr[currentPlayer - 1].getPiece());
            }
            else{
               alert("Occupied. Choose another"); 
            }
        })
    })
    startButton.addEventListener("click", (e) => {
        console.log(e);
        if (e.path[1].children[1].value === "" ||
            e.path[1].children[3].value === ""){
                alert("Please fill in names for both players!")
            }
        else {
            startGame(e.path[1].children[1].value, e.path[1].children[3].value)
        }
    })

    return {startGame}
})();
