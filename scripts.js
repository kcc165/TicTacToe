const newPlayer = (name, piece) => {
    let score = 0;
    const getName = () => name;
    const getPiece = () => piece;
    const addPoint = () => score += 1;
    const getScore = () => score;
    return {getName, getPiece, addPoint, getScore};
};

const gameBoard = () => {
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer;
    const setPiece = (index) => {
        if (board[index] === ""){
            alert("Space occupied. Choose another space");
        }
        else{
            board[index] = currentPlayer.getPiece();
        }
    }
}
