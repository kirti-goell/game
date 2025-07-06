import React, { useState, useEffect } from "react";
import "./Grid.css";
import { generateGridWithLogic, splitByComma } from "./Logic1";

const Grid = ({ length, breadth }) => {
  const [gridData, setGridData] = useState([]);
  const [clickedCells, setClickedCells] = useState(new Set());

  useEffect(() => {
    let s = localStorage.getItem("arr") || "";
    const initialValues = splitByComma(s);
    const generatedGrid = generateGridWithLogic(length, breadth, initialValues);
    setGridData(generatedGrid);
  }, [length, breadth]);

  const handleCellClick = (rowIdx, colIdx) => {
    const key = `${rowIdx}-${colIdx}`;
    const newSet = new Set(clickedCells);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setClickedCells(newSet);
  };
  
  //try to match the clicked elements with ans
  //ans contains a grid but in string format which contains characters and spaces
  
  const checkFunction = () => {
    const ans = localStorage.getItem("ans") || "";
    const ansArray = ans.split(","); // Convert to flat array
    const ansRows = [];

   
    let idx = 0;
    for (let i = 0; i < length; i++) {
      const row = [];
      for (let j = 0; j < breadth; j++) {
        row.push(ansArray[idx] || ""); // Fill with empty string if undefined
        idx++;
      }
      ansRows.push(row);
    }

    // Build set of expected correct cell keys (non-empty entries)
    const expectedSet = new Set();
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < breadth; j++) {
        if (ansRows[i][j].trim() !== "") {
          expectedSet.add(`${i}-${j}`);
        }
      }
    }

    // Compare clicked cells with expected set
    let correctCount = 0;
    clickedCells.forEach((cell) => {
      if (expectedSet.has(cell)) correctCount++;
    });

    const totalClicked = clickedCells.size;
    const missed = [...expectedSet].filter(
      (cell) => !clickedCells.has(cell)
    ).length;
    const wrongClicks = totalClicked - correctCount;

    if (missed == 0 && wrongClicks == 0) {
      alert(
        `Congratulations you have finished the game.\n created by Kirti Goel`
      );
      const res = window.confirm("Do you want to play again?");
      if (res) {
        window.location.reload();
      }
    } else {
      alert(`✅ Correct Clicks: ${correctCount}
❌ Missed (Expected but not clicked): ${missed}
❌ Wrong Clicks (Clicked but not expected): ${wrongClicks}`);
    }
  };

  return (
    <div className="grid-container">
      {gridData.map((row, i) => (
        <div key={i} className="grid-row">
          {row.map((char, j) => {
            const key = `${i}-${j}`;
            const isClicked = clickedCells.has(key);

            return (
              <div
                key={j}
                className={`grid-cell ${isClicked ? "clicked" : ""}`}
                onClick={() => handleCellClick(i, j)}
              >
                {char}
              </div>
            );
          })}
        </div>
      ))}
      <button
        onClick={() => {
          checkFunction();
        }}
      >
        Please check
      </button>
    </div>
  );
};

export default Grid;
