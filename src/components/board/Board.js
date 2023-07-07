import React, { useEffect, useState } from "react";
import "./Board.css";

//components
import createBoard from "../../gameLogic";
import Cell from "../cells/Cell";

export default function Board({ setGameOverMessage, setWinStatus }) {
  //states
  const [grid, setGrid] = useState([]);
  const [gamePlayable, setGamePlayable] = useState(true);

  //should start game at launch
  useEffect(() => {
    const newBoard = createBoard(5, 5, 5);
    console.log(newBoard);
    setGrid(newBoard.board);
  }, []);

  //should 'mark' cell when right clicked
  const flagTile = (event, x, y) => {
    event.preventDefault();
    //checks if game is still playable
    if (gamePlayable === false) {
      return;
    }

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
    //checks if game is still playable
    if (gamePlayable === false) {
      return;
    }

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
      setWinStatus(true);
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
    );
  });
}
