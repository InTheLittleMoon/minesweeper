import React, { useState } from "react";
import "./App.css";

//components
import Board from "./components/board/Board";
import GameOverPopup from "./components/gameOverMessage/GameOverPopup";

function App() {
  const [gameOverMessage, setGameOverMessage] = useState(true);
  const [winStatus, setWinStatus] = useState(false);
  return (
    <div className="game-main-container">
      <Board
        setGameOverMessage={setGameOverMessage}
        setWinStatus={setWinStatus}
      />
      {gameOverMessage && <GameOverPopup winStatus={winStatus} />}
    </div>
  );
}

export default App;

//goals:
//left-click:
//needs to change tile state to one of three:
//empty: reveals all neighboring empty spaces and numbered 'border'
//number: only reveals number
//mine: ends game

//right click(context menu):
//marked tile needs to decrement total mines counter that displays how many mines are out on the board
