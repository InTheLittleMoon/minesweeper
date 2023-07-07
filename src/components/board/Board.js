import React, { useEffect, useState } from "react";
import "./board.css";

//components
import createBoard from "../../gameLogic";
import Cell from "../cells/cell";
import GameOverPopup from "../gameOverMessage/GameOverPopup";

export default function Board() {
  //states
  const [grid, setGrid] = useState([]);
  const [gamePlayable, setGamePlayable] = useState(true);
  const [gameOverMessage, setGameOverMessage] = useState(false);

  //should start game at launch
  useEffect(() => {
    const newBoard = createBoard(5, 5, 5);
    console.log(newBoard);
    setGrid(newBoard.board);
  }, []);

  //should 'mark' cell when right clicked
  const flagTile = (event, x, y) => {
    event.preventDefault();
    //alternates between true and false so you can mark / unmark
    setGrid((prevGrid) => {
      let newGrid = JSON.parse(JSON.stringify(prevGrid));
      newGrid[x][y] = { ...newGrid[x][y], flagged: !newGrid[x][y].flagged };
      return newGrid;
    });

    console.log(grid);
  };

  //should deal with left click, changing tile to correct 'mine', 'empty', or 'num' value
  const revealTile = (x, y) => {
    setGrid((prevGrid) => {
      let newGrid = JSON.parse(JSON.stringify(prevGrid));
      newGrid[x][y].revealed = true;
      return newGrid;
    });

    console.log(grid);
  };

  useEffect(() => {
    if (gamePlayable === false) {
      setGameOverMessage(true);
    }

    return;
  }, [gamePlayable]);

  return grid.map((singleRow) => {
    return (
      <div className="row">
        {singleRow.map((tileData) => {
          return (
            <Cell
              tileData={tileData}
              flagTile={flagTile}
              revealTile={revealTile}
            />
          );
        })}
      </div>
      {gameOverMessage === true && <GameOverPopup/> }
    );
  });
}
