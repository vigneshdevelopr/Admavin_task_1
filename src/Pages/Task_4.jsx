import React, { useState, useEffect } from 'react';
import '../Style/Task_4.css';
import Template from "../Template/Template";

const Task_4 = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(''));
  const [currentBox, setCurrentBox] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOn, setGameOn] = useState(false);

  const handleBoxClick = (index) => {
    if (index === currentBox) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
  };

  const handleClick = (index) => {
    handleBoxClick(index);
  };

  const startGame = () => {
    setGameOn(true);
    setScore(0);
  };

  const endGame = () => {
    setGameOn(false);
  };

  useEffect(() => {
    const generateRandomBox = () => {
      const randomIndex = Math.floor(Math.random() * boxes.length);
      setCurrentBox(randomIndex);
    };

    let intervalId;
    if (gameOn) {
      generateRandomBox();
      intervalId = setInterval(generateRandomBox, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [gameOn, currentBox, score, boxes]);

  return (
    <Template>
    <div className="game-container">
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`box ${currentBox === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {currentBox === index && <span>HIT</span>}
          </div>
        ))}
      </div>
      <div className="score-container">
        {!gameOn && <button onClick={startGame}>Start Game</button>}
        {gameOn && <button onClick={endGame}>End Game</button>}
        <p>Score: {score}</p>
      </div>
    </div>
    </Template>
  );
};

export default Task_4;
