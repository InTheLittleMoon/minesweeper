import React from "react";
import "./App.css";
import Board from "./components/board/Board";

function App() {
  return (
    <div className="game-main-container">
      <Board />
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
//needs to 'mark' a tile
//marked tile needs to decrement total mines counter that displays how many mines are out on the board
//needs to 'unmark' only tiles that are 'marked'
