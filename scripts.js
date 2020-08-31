const newPlayer = (name, piece) => {
    let score = 0;
    const getName = () => name;
    const getPiece = () => piece;
    const addPoint = () => score += 1;
    const getScore = () => score;
    return {getName, getPiece, addPoint, getScore};
};

const gameBoard = (() => {
    let currentPlayer = 1;
    const getCurrentPlayer = () => currentPlayer;
    const setCurrentPlayer = (player) => {
        if (player == 1){
            currentPlayer += 1;
        }
        else if (player == 2){
            currentPlayer -= 1;
        }
    }
    let board = ["", "", "", "", "", "", "", "", ""];
    let winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    
    
    const setPiece = (index, piece) => {
        if (board[index] !== ""){
            alert("Space occupied. Choose another space");
            
        }
        else{

            if (currentPlayer == 1){
                board[index] = playerArr[0].getPiece();
            
            }
            else if (currentPlayer == 2){
                board[index] = playerArr[1].getPiece();
                
            }
            
            checkWin(playerArr[currentPlayer - 1].getPiece());

        }
        
    }
    const checkWin = (piece) => {
        winConditions.forEach((condition) => {
            if ((board[condition[0]] === piece &&
                board[condition[1]] === piece && 
                board[condition[2]] === piece)){
                    uiController.winScreen(currentPlayer);

            }
            else{
               
            }

            
        })
    }

    const resetBoard = () => {
        for (i = 0; i < board.length; i++){
            board[i] = "";
        }
        console.log(board);
    }

    

    return {setPiece, getCurrentPlayer, setCurrentPlayer, resetBoard};

})();
const playerArr = [" ", " "];
const uiController = (() => {
    const squares = document.querySelectorAll(".slot");
    const startScreen = document.querySelector("#start-screen");
    const boardScreen = document.querySelector("#board");
    const startButton = document.querySelector("#start");

    const winScreen = (player) => {
        boardScreen.setAttribute("style", "display: none");
        const newDiv = document.createElement("div");
        const btnDiv = document.createElement("div");
        const newText = document.createTextNode(`${playerArr[player - 1].getName()} wins!`)
        const newText2 = document.createTextNode("Play Again?");

        const yesBtn = document.createElement("BUTTON");
        yesBtn.innerText = "Yes";
        yesBtn.setAttribute("id", "Yes");

        const noBtn = document.createElement("button");
        noBtn.innerText = "No";
        noBtn.setAttribute("id", "No");

        btnDiv.appendChild(yesBtn);
        btnDiv.appendChild(noBtn);

        

        newDiv.appendChild(newText);
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(document.createElement("br"));
        newDiv.appendChild(newText2);
        
        document.body.appendChild(newDiv);
        document.body.appendChild(btnDiv);

        yesBtn.onclick = () => {
            gameBoard.resetBoard();
            document.body.removeChild(btnDiv);
            document.body.removeChild(newDiv);
            boardScreen.setAttribute("style", "display: block");
            resetSquares();
        }

    }

    
    const startGame = (p1name, p2name) => {
        let player1 = newPlayer(p1name, "X");
        let player2 = newPlayer(p2name, "O");
        playerArr[0] = player1;
        playerArr[1] = player2;
        startScreen.setAttribute("style", "display: none;");
        boardScreen.setAttribute("style", "display: block;");
        
    }
    const resetSquares = () => {
        for (i of squares){
            i.textContent = "";
        }
    }
    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            if (e.target.textContent === ""){
                console.log(e);
                e.target.textContent = playerArr[gameBoard.getCurrentPlayer() - 1].getPiece();
                gameBoard.setPiece(parseInt(e.target.id), playerArr[gameBoard.getCurrentPlayer() - 1].getPiece());
                gameBoard.setCurrentPlayer(gameBoard.getCurrentPlayer());
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

    return {startGame, winScreen}
})();
