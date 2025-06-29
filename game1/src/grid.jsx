import React from "react";
import "./Grid.css";

const Grid = ({ length, breadth }) => {
  let s = (localStorage.getItem("arr")); 
  function splitByComma(inputString) {
  return inputString.split(',').map(str => str.trim());
}
s=splitByComma(s)
console.log(typeof(s))
  const generateGrid = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let grid = [];
    for (let i = 0; i < length; i++) {
      let row = [];
      for (let j = 0; j < breadth; j++) {
        const randomChar = letters[Math.floor(Math.random() * letters.length)];
        row.push(randomChar);
      }
      grid.push(row);
    }
    for(let i=0;i<s.length;i++){
      let val=Math.floor(Math.random()*(breadth-s[i].length))
      // console.log(val)
      for(let j=0;j<s[i].length;j++){
        grid[i][j+val]=s[i][j];
      }
    }
    return grid;
  };

  const gridData = generateGrid();

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
