import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const games = [
    { name: 'Word Search', path: '/word-search', external: false },
    { name: 'Sudoku', path: '/sudoku', external: false },
    { name: 'Memory Game', path: '/memory-game', external: false },
    { name: 'Tic Tac Toe', path: 'https://tic-tac-toe-000.vercel.app/', external: true },
  ];

  return (
    <div className="home-wrapper">
      <h1 className="home-title">🎮 Game Zone</h1>
      <p className="home-subtitle">Choose a game to play:</p>
      <div className="game-grid">
        {games.map((game, index) =>
          game.external ? (
            <a
              key={index}
              href={game.path}
              target="_blank"
              rel="noopener noreferrer"
              className="game-card"
            >
              {game.name}
            </a>
          ) : (
            <Link key={index} to={game.path} className="game-card">
              {game.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
