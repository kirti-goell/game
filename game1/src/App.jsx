import React, { useState } from 'react';
import '../src/App.css';
import Keywords from '../src/Keywords.jsx';
import Grid from '../src/grid';

export default function App() {
  const [value, setValue] = useState(15); // default to easy

  const handleDifficulty = (level) => {
    if (level === 'easy') setValue(10);
    else if (level === 'medium') setValue(15);
    else if (level === 'hard') setValue(20);
  };

  return (
    <div>
      <header className="headercss">
        <h1>Wordle</h1>
      </header>

      <div className="desclass">
        <p>
          Here we have a word game. In this, you simply have to search the given word to increase your score accordingly.
          So, let’s get started. Welcome to Wordle — the ultimate word challenge! Test your vocabulary and sharpen your mind
          with this fun and addictive word game. Every day, you get a new five-letter word to guess within six attempts. Use
          logic, clues, and your word skills to crack the puzzle. Each guess brings feedback to guide you closer to the answer.
          Whether you're a casual player or a word game lover, Wordle offers quick, satisfying gameplay that keeps you coming back.
          Share your scores with friends and join the daily challenge. Start playing now and see if you can find the word in just a few tries!
        </p>
      </div>

      <h3 id="des">All the best!!</h3>

      <img
        className="image"
        src="https://images.pexels.com/photos/1558665/pexels-photo-1558665.jpeg"
        alt="Wordle Banner"
      />

      <div className="difficulty-buttons">
        <button className="easy" onClick={() => handleDifficulty('easy')}>Easy</button>
        <button className="medium" onClick={() => handleDifficulty('medium')}>Medium</button>
        <button className="hard" onClick={() => handleDifficulty('hard')}>Hard</button>
      </div>

      <Keywords />
      <Grid length={value} breadth={value} />
    </div>
  );
}
