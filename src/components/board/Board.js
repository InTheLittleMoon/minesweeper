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
  const [nonMineTiles, setNonMineTiles] = useState(null);

  //should start game at launch
  useEffect(() => {
    //row count, col count, mine count
    const newBoard = createBoard(3, 2, 1);
    console.log(newBoard);

    //should have same values as newBoard args
    //NOTE: for some reason, youll need to set the mines as to having been decreased by one more for win logic to trigger
    setNonMineTiles(3 * 2 - 1);
    console.log(nonMineTiles);
    setGrid(newBoard.board);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //should deal with right click
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

  //should deal with left click
  const revealTile = async (x, y) => {
    //checks if game is still playable
    if (gamePlayable === false) {
      return;
    }

    setGrid((prevGrid) => {
      let newGrid = JSON.parse(JSON.stringify(prevGrid));
      newGrid[x][y].revealed = true;
      return newGrid;
    });

    //only if mine tile
    if (grid[x][y].value === "X") {
      //should start 'end game' logics
      setGamePlayable(false);

      //1.5 sec delay to show mine tile then end game
      setTimeout(() => {
        setWinStatus(false);
        setGameOverMessage(true);
      }, 1500);
    } else {
      //only if blank tile
      if (grid[x][y].value === 0) {
        //should account for blank tile not triggering any other nonminetile decrements
        let count = 1;

        setGrid((prevGrid) => {
          let newGrid = revealLogic(prevGrid, x, y);
          count = count + newGrid.tileCount;
          return newGrid.grid;
        });

        setNonMineTiles((prevCount) => prevCount - 1);
      }
      //only if num tile
      else {
        setNonMineTiles((prevCount) => prevCount - 1);
        console.log(nonMineTiles);
      }
    }
  };

  useEffect(() => {
    if (nonMineTiles === 0) {
      console.log("Gets to endgame useEffect: ", nonMineTiles);
      //should start 'end game' logics
      // setGamePlayable(false);
      // //1.5 sec delay to show mine tile then end game
      // setTimeout(() => {
      //   setWinStatus(true);
      //   setGameOverMessage(true);
      // }, 1500);
    }
  }, [nonMineTiles]);

  useEffect(() => {
    console.log("Updated nonMineTiles: ", nonMineTiles);
  }, [nonMineTiles]);

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
