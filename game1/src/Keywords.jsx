import React, { useState } from 'react';
import './Keywords.css';

export default function Keywords() {
  const getRandomKeywords = () => {
    const commonWords = [
      "APPLE", "BREAD", "CHAIR", "DANCE", "EMAIL", "FRUIT",
      "GREEN", "HOUSE", "INPUT", "JUICE", "KNIFE", "LUNCH",
      "MONEY", "NIGHT", "OCEAN", "PIZZA", "QUIET", "RADIO",
      "SHIRT", "TABLE", "UNCLE", "VIDEO", "WATER", "ZEBRA"
    ];

    const filtered = commonWords.filter(word => word.length >= 5 && word.length <= 6);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const s = getRandomKeywords();
  localStorage.setItem("arr", s);

  const WordGrid = ({ length, breadth, s }) => {
    const [clickedCells, setClickedCells] = useState(new Set());

    const handleCellClick = (i, j) => {
      const key = `${i}-${j}`;
      const newSet = new Set(clickedCells);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      setClickedCells(newSet);
    };

    const createGrid = () => {
      const grid = [];
      let idx = 0;
      for (let i = 0; i < length; i++) {
        const row = [];
        for (let j = 0; j < breadth; j++) {
          if (idx < s.length) {
            row.push(s[idx]);
            idx++;
          } else {
            row.push("");
          }
        }
        grid.push(row);
      }
      return grid;
    };

    const gridData = createGrid();

    return (
      <div className="word-grid-container" id="grid-box">
        {gridData.map((row, i) => (
          <div key={i} className="word-grid-row">
            {row.map((item, j) => {
              const isClicked = clickedCells.has(`${i}-${j}`);
              return (
                <div
                  key={j}
                  className={`word-grid-cell ${isClicked ? 'red' : ''}`}
                  onClick={() => handleCellClick(i, j)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="keyword-wrapper" id="keyword-section">
      <h2 className="keyword-heading">Random Daily Word Grid</h2>
      <WordGrid length={2} breadth={5} s={s} />
    </div>
  );
}
