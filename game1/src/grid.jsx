import React from "react";
import "./Grid.css";
import { generateGrid,splitByComma,generateGridWithLogic } from "./Logic1";
const Grid = ({ length, breadth }) => {
  let s = localStorage.getItem("arr");
  
  s = splitByComma(s);
  const gridData = generateGridWithLogic(length, breadth,s);

  return (
    <div className="grid-container">
      {gridData.map((row, i) => (
        <div key={i} className="grid-row">
          {row.map((char, j) => (
            <div key={j} className="grid-cell">
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
