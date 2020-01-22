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

const updateBoard = (board, move, player) => {
  // eslint-disable-next-line no-param-reassign
  board[Math.trunc(move / 3)][move % 3] = player;
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

const getGameStatus = (board, turn) => {
  if (turn === 9) {
    return true;
  }
  let isWin = false;
  // check horizontal wins
  // check horizontal wins
  // check diagonal wins
  return isWin;
};


const main = async (board) => {
  displayBoard(board);
  let isWin = false;
  let turn = 1;

  while (!isWin) {
    const turnPlayer = turn % 2 === 0 ? 'O' : 'X';
    // eslint-disable-next-line no-await-in-loop
    const moveStr = await promptMove(turnPlayer);
    const move = parseInt(moveStr, 10) - 1;
    updateBoard(board, move, turnPlayer);
    displayBoard(board);

    isWin = getGameStatus(board, turn);
    turn += 1;
  }

  rl.close();
};

main(boardData);
