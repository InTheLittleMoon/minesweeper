import React, { useEffect, useState } from "react";
import "./board.css";

//components
import createBoard from "../../../gameLogic";
import Cell from "../cell";

export default function Board() {
  const [grid, setGrid] = useState([]);

  //should start game at launch
  useEffect(() => {
    const newBoard = createBoard(5, 5, 10);
    console.log(newBoard);
    setGrid(newBoard.board);
  }, []);

  //should 'mark' cell when right clicked
  const flagTile = (event, x, y) => {
    event.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  return grid.map((singleRow) => {
    return (
      <div className="row">
        {singleRow.map((tileData) => {
          return <Cell tileData={tileData} flagTile={flagTile} />;
        })}
      </div>
    );
  });
}
