import React, { useState, useEffect } from 'react';
import './Game.css';
import soccerball from './images/soccerball.svg';
import goalie_yasir from './images/goalie_yasir.svg';

function Game() {
  const [score, setScore] = useState(0);
  const [goalieX, setGoalieX] = useState(50); // Initially centered
  const [soccerBalls, setSoccerBalls] = useState([]);

  useEffect(() => {
    // Set up event listeners for controlling goalie movement
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setGoalieX((prev) => Math.max(0, prev - 5)); // Move left
      } else if (e.key === 'ArrowRight') {
        setGoalieX((prev) => Math.min(100, prev + 5)); // Move right
      }
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const newX = (touch.clientX / window.innerWidth) * 100;
      setGoalieX(newX);
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('touchmove', handleTouchMove);

    // Clean up event listeners
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    // Generate soccer balls at random positions at the top of the screen
    const interval = setInterval(() => {
      const newBall = {
        id: Date.now(),
        x: Math.random() * 100,
        y: 0,
        speed: 1 + Math.random() * 2, // Random fall speed
      };
      setSoccerBalls((prevBalls) => [...prevBalls, newBall]);
    }, 1000); // New ball every second

    // Clean up interval
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update soccer ball positions and check for collisions
    const gameInterval = setInterval(() => {
      setSoccerBalls((prevBalls) => {
        return prevBalls
          .map((ball) => {
            const newY = ball.y + ball.speed;
            // Check if goalie catches the ball
            if (
              newY >= 80 &&
              newY <= 90 &&
              Math.abs(ball.x - goalieX) < 5
            ) {
              setScore((prevScore) => prevScore + 1);
              return null; // Ball caught, set to null
            }
            // If ball reaches the bottom, remove it
            if (newY > 100) {
              return null;
            }
            return { ...ball, y: newY }; // Update position
          })
          .filter(Boolean); // Remove null (caught or gone balls)
      });
    }, 20); // Update every 20ms (smooth motion)

    // Clean up interval
    return () => clearInterval(gameInterval);
  }, [goalieX]);

  return (
    <div>
      <div className="NavBar">
        <div className="nav-title">Soccer Game</div>
        <div className="scoreboard">
          <img className="soccer-logo" src={soccerball} alt="Soccer Ball" />
          <div className="score">{score}</div>
        </div>
      </div>
      <div className="soccer-background">
        <img
          src={goalie_yasir}
          alt="Goalie Yasir"
          className="goalie"
          style={{ left: `${goalieX}%` }}
        />
        {soccerBalls.map((ball) => (
          <img
            key={ball.id}
            src={soccerball}
            alt="Soccer Ball"
            className="soccer-ball"
            style={{
              left: `${ball.x}%`,
              top: `${ball.y}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
