import React from "react";
import "./Cell.css";

//images
import mineIcon from "../../assets/images/mine-icon.png";

export default function Cell({ tileData, flagTile, revealTile }) {
  return (
    <div
      className={`cell ${
        tileData.revealed && tileData.value === 0 ? "revealedBlank" : null
      } ${
        tileData.revealed && tileData.value !== "X" && tileData.value > 0
          ? "revealedNum"
          : null
      } ${
        tileData.flagged && tileData.revealed === false ? "flaggedTile" : null
      }`}
      onContextMenu={(event) => {
        flagTile(event, tileData.x, tileData.y);
        console.log(tileData);
      }}
      onClick={() => {
        revealTile(tileData.x, tileData.y);
        console.log(tileData);
      }}
    >
      {tileData.revealed !== false &&
        tileData.value !== 0 &&
        tileData.value !== "X" &&
        tileData.value}
      {tileData.revealed !== false && tileData.value === "X" ? (
        <img alt="mineIcon" src={mineIcon} />
      ) : null}
    </div>
  );
}
