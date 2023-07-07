import React from "react";
import "./Cell.css";

export default function Cell({ tileData, flagTile, revealTile }) {
  return (
    <div
      className="cell"
      onContextMenu={(event) => {
        flagTile(event, tileData.x, tileData.y);
        console.log(tileData);
      }}
      onClick={() => {
        revealTile(tileData.x, tileData.y);
        console.log(tileData);
      }}
    >
      {tileData.revealed !== false && tileData.value !== 0 && tileData.value}
    </div>
  );
}
