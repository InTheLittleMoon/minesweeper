import React, { useState } from "react";
import "./App.css";

//components
import Board from "./components/board/Board";
import GameOverPopup from "./components/gameOverMessage/GameOverPopup";

function App() {
  const [gameOverMessage, setGameOverMessage] = useState(false);
  const [winStatus, setWinStatus] = useState(false);
  return (
    <div className="game-main-container">
      <div className="banner">MineSweeper</div>
      <Board
        setGameOverMessage={setGameOverMessage}
        setWinStatus={setWinStatus}
      />
      {gameOverMessage && <GameOverPopup winStatus={winStatus} />}
    </div>
  );
}

export default App;
