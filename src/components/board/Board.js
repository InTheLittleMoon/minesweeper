import React, { useEffect, useState } from "react";
import "./Board.css";

//components
import createBoard from "../../gameLogic";
import Cell from "../cells/Cell";
import revealLogic from "../../revealLogic";

export default function Board({ setGameOverMessage, setWinStatus }) {
  //states
  const [grid, setGrid] = useState([]);
  const [gamePlayable, setGamePlayable] = useState(true);
  const [nonMineTiles, setNonMineTiles] = useState(0);

  //should start game at launch
  useEffect(() => {
    const newBoard = createBoard(5, 5, 1);
    console.log(newBoard);

    //should have same values as newBoard args
    setNonMineTiles(5 * 5 - 1);
    console.log(nonMineTiles);
    setGrid(newBoard.board);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    //only if blank tile
    if (grid[x][y].value === 0) {
      //deals with first click of blank tile decreasing the nonMineTiles
      setNonMineTiles((prevCount) => prevCount--);
      setGrid((prevGrid) => {
        let newState = revealLogic(prevGrid, x, y, setNonMineTiles);
        console.log(newState);
        return newState;
      });
    }

    //only if mine tile
    if (grid[x][y].value === "X") {
      //should start 'end game' logics
      setGamePlayable(false);

      //1.5 sec delay to show mine tile then end game
      setTimeout(() => {
        setWinStatus(false);
        setGameOverMessage(true);
      }, 1500);
    }

    console.log(grid);
  };

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
