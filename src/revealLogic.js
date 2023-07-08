export default function RevealLogic(grid, x, y) {
  //only needs to target tiles w value === 0
  //should add to array and do loop on all elements added to check for other 0's near them
  let flipLoop = [];
  //will decrement from nonMineTiles at the end to give a valid win condition
  let tileCount = 0;

  flipLoop.push(grid[x][y]);

  while (flipLoop.length > 0) {
    let tile = flipLoop.pop();
    console.log("loops");

    // //should deal with every new tile that enters the loop
    // if (!tile.revealed) {
    //   tileCount++;
    //   tile.revealed = true;
    // }

    // //top tile
    // if (grid[x - 1][y] && grid[x - 1][y].value === 0) {
    //   flipLoop.push(grid[x - 1][y]);
    //   console.log("gets to 1");
    // }

    // //top right tile
    // if (grid[x - 1][y + 1] && grid[x - 1][y + 1].value === 0) {
    //   flipLoop.push(grid[x - 1][y + 1]);
    //   console.log("gets to 2");
    // }

    // //right tile
    // if (grid[x][y + 1] && grid[x][y + 1].value === 0) {
    //   flipLoop.push(grid[x][y + 1]);
    //   console.log("gets to 3");
    // }

    // //bottom right tile
    // if (grid[x + 1][y + 1] && grid[x + 1][y + 1].value === 0) {
    //   flipLoop.push(grid[x + 1][y + 1]);
    //   console.log("gets to 4");
    // }

    // //bottom tile
    // if (grid[x + 1][y] && grid[x + 1][y].value === 0) {
    //   flipLoop.push(grid[x + 1][y]);
    //   console.log("gets to 5");
    // }

    // //bottom left tile
    // if (grid[x + 1][y - 1] && grid[x + 1][y - 1].value === 0) {
    //   flipLoop.push(grid[x + 1][y - 1]);
    //   console.log("gets to 6");
    // }

    // //left tile
    // if (grid[x][y - 1] && grid[x][y - 1].value === 0) {
    //   flipLoop.push(grid[x][y - 1]);
    //   console.log("gets to 7");
    // }

    // //top left tile
    // if (grid[x - 1][y - 1] && grid[x - 1][y - 1].value === 0) {
    //   flipLoop.push(grid[x - 1][y - 1]);
    //   console.log("gets to 8");
    // }
  }
  return { grid, tileCount };
}
