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
        }
        
    }
    const checkWin = () => {
        winConditions.forEach((condition) => {
            if (board[condition[0]] === board[condition[1]] &&
                board[condition[1]] === board[condition[2]]){

                }
        })
    }

    return {setPiece};

})();
