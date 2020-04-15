class MineSweeper {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
    }

    generateBoard() {
        let board = [];
        for (let i = 0; i < this.rows; i++) {
            let rowArray = [];
            for (let j = 0; j < this.cols; j++) {
                rowArray.push('.');
            }
            board.push(rowArray);
        }

        return board;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    insertMines(board) {
        for (let i = 0; i < this.rows; i++) {
            board[this.getRandomInt(0, this.rows)][this.getRandomInt(0, this.cols)] = '*';
        }
        return board;
    }

    getSumOfMines(board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {

                if (board[i][j] === '.') {
                    board[i][j] = 0;
                }

                if (board[i][j] >= 0) {
                    if ((i + 1) < board.length && board[i+1][j] === '*') {
                        board[i][j] += 1;
                    } 
                    
                    if (j + 1 < this.cols && board[i][j + 1] === '*') {
                        board[i][j] += 1;
                    } 
                    
                    if (j !== 0 && board[i][j - 1] === '*') {
                        board[i][j] += 1;
                    } 
                    
                    if (i !== 0 && board[i - 1][j] === '*') {
                        board[i][j] += 1;
                    }

                    if ((i + 1) < board.length && (j + 1) < this.cols && board[i + 1][j + 1] === '*') {
                        board[i][j] += 1;
                    }

                    if (i !== 0 && j !== 0 && board[i - 1][j - 1] === '*') {
                        board[i][j] += 1;
                    }
                }
            }
        }
        return board;
    }
}

module.exports = MineSweeper;

const minesweeper = new MineSweeper(3, 3);
const board = minesweeper.insertMines(minesweeper.generateBoard());
for (let row of board) {
    console.log(row);
}
console.log('\n')
minesweeper.getSumOfMines(board);