import React from "react";
import "./cell.css";

export default function Cell({ tileData, flagTile }) {
  return (
    <div
      className="cell"
      onContextMenu={(event) => flagTile(event, tileData.x, tileData.y)}
      onClick={() => console.log(tileData)}
    >
      {tileData.value}
    </div>
  );
}
