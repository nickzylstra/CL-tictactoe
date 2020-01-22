const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const boardData = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const promptMove = (player) => new Promise((resolve) => {
  rl.question(`Player '${player}', enter square (1-9) for your next move: `, (move) => {
    resolve(move);
  });
});

const updateBoard = (move) => {
  
};

const displayBoard = (board) => {
  rl.write(`
     --------- 
    | ${board[0][0]}  ${board[0][1]}  ${board[0][2]} |
    | ${board[1][0]}  ${board[1][1]}  ${board[1][2]} |
    | ${board[2][0]}  ${board[2][1]}  ${board[2][2]} |
     ---------
  `);
};

const getGameStatus = (board) => {

  return true;
};


const main = async (board) => {
  displayBoard(board);
  let isWin = false;

  while (!isWin) {
    // eslint-disable-next-line no-await-in-loop
    const move = await promptMove();
    updateBoard(move);
    displayBoard(board);

    isWin = getGameStatus(board);
  }

  rl.close();
};

main(boardData);
