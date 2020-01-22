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

const promptMove = () => new Promise((resolve) => {
  rl.question('Enter 1-9 for your next move ', (move) => {
    resolve(move);
  });
});

const updateBoard = (move) => {

};

const displayBoard = (board) => {
  
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
