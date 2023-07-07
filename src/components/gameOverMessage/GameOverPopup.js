import React from "react";
import "./GameOverPopup.css";

//images
import mineIcon from "../../assets/images/mine-icon.png";

export default function GameOverPopup({ winStatus }) {
  //needs to check if games over due hitting a mine or winning

  return (
    <div className="popup">
      <span>
        {winStatus ? "You Won! Play again?" : "You Lost! Play again?"}
      </span>
      <button onClick={() => window.location.reload(false)}>
        <img alt="mine-icon" src={mineIcon} className="pulse" />
      </button>
    </div>
  );
}
