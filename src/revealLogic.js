export default function RevealLogic(grid, x, y) {
  //only needs to target tiles w value === 0
  //will decrement from nonMineTiles at the end to give a valid win condition
  let tileCount = 0;

  //should add to array and do loop on all elements added to check for other 0's near them
  let flipped = [];
  flipped.push(grid[x][y]);

  while (flipped.length !== 0) {
    let single = flipped.pop();

    //should deal with every new tile that needs to be revealed
    if (!single.revealed) {
      tileCount++;
      single.revealed = true;
    }

    //should deal with chance a num tile somehow gets here
    if (single.value !== 0) {
      break;
    }

    //pushes top tile into loop
    if (
      single.x > 0 &&
      grid[single.x - 1][single.y].value === 0 &&
      !grid[single.x - 1][single.y].revealed
    ) {
      flipped.push(grid[single.x - 1][single.y]);
    }

    //pushes top right tile into loop
    if (
      single.x > 0 &&
      single.y < grid[0].length - 1 &&
      grid[single.x - 1][single.y + 1].value === 0 &&
      !grid[single.x - 1][single.y + 1].revealed
    ) {
      flipped.push(grid[single.x - 1][single.y + 1]);
    }

    //pushes right tile into loop
    if (
      single.y < grid[0].length - 1 &&
      grid[single.x][single.y + 1].value === 0 &&
      !grid[single.x][single.y + 1].revealed
    ) {
      flipped.push(grid[single.x][single.y + 1]);
    }

    //pushes bottom right tile into loop
    if (
      single.x < grid.length - 1 &&
      single.y < grid[0].length - 1 &&
      grid[single.x + 1][single.y + 1].value === 0 &&
      !grid[single.x + 1][single.y + 1].revealed
    ) {
      flipped.push(grid[single.x + 1][single.y + 1]);
    }

    //pushes bottom tile into loop
    if (
      single.x < grid.length - 1 &&
      grid[single.x + 1][single.y].value === 0 &&
      !grid[single.x + 1][single.y].revealed
    ) {
      flipped.push(grid[single.x + 1][single.y]);
    }

    //pushes bottom left tile into loop
    if (
      single.x < grid.length - 1 &&
      single.y > 0 &&
      grid[single.x + 1][single.y - 1].value === 0 &&
      !grid[single.x + 1][single.y - 1].revealed
    ) {
      flipped.push(grid[single.x + 1][single.y - 1]);
    }

    //pushes left tile into loop
    if (
      single.y > 0 &&
      grid[single.x][single.y - 1].value === 0 &&
      !grid[single.x][single.y - 1].revealed
    ) {
      flipped.push(grid[single.x][single.y - 1]);
    }

    //pushes top left tile into loop
    if (
      single.x > 0 &&
      single.y > 0 &&
      grid[single.x - 1][single.y - 1].value === 0 &&
      !grid[single.x - 1][single.y - 1].revealed
    ) {
      flipped.push(grid[single.x - 1][single.y - 1]);
    }

    //should start revealing tiles
    //top
    if (single.x > 0 && !grid[single.x - 1][single.y].revealed) {
      grid[single.x - 1][single.y].revealed = true;
      tileCount++;
    }

    //top right
    if (
      single.x > 0 &&
      single.y < grid[0].length - 1 &&
      !grid[single.x - 1][single.y + 1].revealed
    ) {
      grid[single.x - 1][single.y + 1].revealed = true;
      tileCount++;
    }

    //right
    if (
      single.y < grid[0].length - 1 &&
      !grid[single.x][single.y + 1].revealed
    ) {
      grid[single.x][single.y + 1].revealed = true;
      tileCount++;
    }

    //bottom right
    if (
      single.x < grid.length - 1 &&
      single.y < grid[0].length - 1 &&
      !grid[single.x + 1][single.y + 1].revealed
    ) {
      grid[single.x + 1][single.y + 1].revealed = true;
      tileCount++;
    }

    //bottom
    if (single.x < grid.length - 1 && !grid[single.x + 1][single.y].revealed) {
      grid[single.x + 1][single.y].revealed = true;
      tileCount++;
    }

    //bottom left
    if (
      single.x < grid.length - 1 &&
      single.y > 0 &&
      !grid[single.x + 1][single.y - 1].revealed
    ) {
      grid[single.x + 1][single.y - 1].revealed = true;
      tileCount++;
    }

    //left
    if (single.y > 0 && !grid[single.x][single.y - 1].revealed) {
      grid[single.x][single.y - 1].revealed = true;
      tileCount++;
    }

    //top left
    if (
      single.x > 0 &&
      single.y > 0 &&
      !grid[single.x - 1][single.y - 1].revealed
    ) {
      grid[single.x - 1][single.y - 1].revealed = true;
      tileCount++;
    }
  }

  console.log(tileCount);
  return { grid, tileCount };
}
