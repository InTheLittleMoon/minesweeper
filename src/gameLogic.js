const createBoard = (row, col, mines) => {
  const randomNum = (min = 0, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
  };

  //creates blank board
  let board = [];
  let mineLocation = [];

  //should push data object for each tile
  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false,
      });
    }
    board.push(subCol);
  }

  //should randomize bomb placements
  let mineCount = 0;
  while (mineCount < mines) {
    let x = randomNum(0, row - 1);
    let y = randomNum(0, col - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]);
      mineCount++;
    }
  }

  //should be able to add numbers by mines around it
  for (let roww = 0; roww < row; roww++) {
    for (let coll = 0; coll < col; coll++) {
      //skips mine tiles
      if (board[roww][coll].value === "X") {
        continue;
      }

      //cell top
      if (roww > 0 && board[roww - 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      //cell top right
      if (
        roww > 0 &&
        coll < col - 1 &&
        board[roww - 1][coll + 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      //cell right
      if (coll < col - 1 && board[roww][coll + 1].value === "X") {
        board[roww][coll].value++;
      }

      //cell bottom right
      if (
        roww < row - 1 &&
        coll < col - 1 &&
        board[roww + 1][coll + 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      //cell bottom
      if (roww < row - 1 && board[roww + 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      //cell bottom left
      if (
        roww < row - 1 &&
        coll > 0 &&
        board[roww + 1][coll - 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      //cell left
      if (coll > 0 && board[roww][coll - 1].value === "X") {
        board[roww][coll].value++;
      }

      //cell top left
      if (roww > 0 && coll > 0 && board[roww - 1][coll - 1].value === "X") {
        board[roww][coll].value++;
      }
    }
  }

  return { board, mineLocation };
};

export default createBoard;
