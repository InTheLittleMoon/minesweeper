export default function RevealLogic(grid, x, y, setNonMineTile) {
  //only needs to target tiles w value === 0
  //should add to array and do loop on all elements added to check for other 0's near them
  let flipLoop = [];
  //will decrement from nonMineTiles at the end to give a valid win condition
  let tileCount = 0;

  flipLoop.push(grid[x][y]);

  while (flipLoop.length !== 0) {
    let tile = flipLoop.pop();

    //should deal with every new tile that enters the loop
    if (!tile.revealed) {
      tileCount++;
      tile.revealed = true;
    }

    //top tile
    if (grid[x - 1][y] && grid[x - 1][y].value === 0) {
      flipLoop.push(grid[x - 1][y]);
    }

    //top right tile
    if (grid[x - 1][y + 1] && grid[x - 1][y + 1].value === 0) {
      flipLoop.push(grid[x - 1][y + 1]);
    }

    //right tile
    if (grid[x][y + 1] && grid[x][y + 1].value === 0) {
      flipLoop.push(grid[x][y + 1]);
    }

    //bottom right tile
    if (grid[x + 1][y + 1] && grid[x + 1][y + 1].value === 0) {
      flipLoop.push(grid[x + 1][y + 1]);
    }

    //bottom tile
    if (grid[x + 1][y] && grid[x + 1][y].value === 0) {
      flipLoop.push(grid[x + 1][y]);
    }

    //bottom left tile
    if (grid[x + 1][y - 1] && grid[x + 1][y - 1].value === 0) {
      flipLoop.push(grid[x + 1][y - 1]);
    }

    //left tile
    if (grid[x][y - 1] && grid[x][y - 1].value === 0) {
      flipLoop.push(grid[x][y - 1]);
    }

    //top left tile
    if (grid[x - 1][y - 1] && grid[x - 1][y - 1].value === 0) {
      flipLoop.push(grid[x - 1][y - 1]);
    }
  }

  console.log(tileCount);
  setNonMineTile((prevState) => prevState - tileCount);
  return grid;
}
