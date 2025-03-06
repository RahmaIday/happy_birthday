import React, { useState, useEffect } from 'react';
import './Game.css';
import soccerball from './images/soccerball.svg';
import goalie_yasir from './images/goalie_yasir.svg';
import yasir from './images/yasir_hat.svg';
import jumping_yasir from './images/jumping_cowboy_yasir.svg';
import button_pressed from './images/backbtn-pressed.svg';
import button_normal from './images/backbtn.svg';
import { useNavigate } from 'react-router-dom'; 

function Game() {
  const [score, setScore] = useState(0);
  const [goalieX, setGoalieX] = useState(50); // Initially centered
  const [soccerBalls, setSoccerBalls] = useState([]);
  const [gameOver, setGameOver] = useState(false); // New state for game over
  const [isJumping, setIsJumping] = useState(false); 
  const [buttonImage, setButtonImage] = useState(button_normal);
  const navigate = useNavigate(); 

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
    // Generate soccer balls at random positions at the top of the screen if the game is not over
    if (!gameOver) {
      const interval = setInterval(() => {
        const newBall = {
          id: Date.now(),
          x: Math.random() * 100,
          y: 0,
          speed: 0.5 + Math.random(), // Random fall speed
        };
        setSoccerBalls((prevBalls) => [...prevBalls, newBall]);
      }, 1000); // New ball every second

      // Clean up interval
      return () => clearInterval(interval);
    }
  }, [gameOver]);

  useEffect(() => {
    if (score >= 20) {
      setGameOver(true); // Set game over if score reaches 20
      return;
    }

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
  }, [goalieX, score]);

  // jumping effect 
  useEffect(() => {
    const jumpInterval = setInterval(() => {
      setIsJumping((prev) => !prev); 
    }, 700); // Toggle every 700ms

    return () => clearInterval(jumpInterval);
  }, []);

  return (
    <div>
      <div className="NavBar">
        <div className="nav-title">Game Start</div>
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
      <div className='footerBar'></div>
      {gameOver && (
        <div className="overlay">
          
          <div className="overlay-message">Congratulations!</div>
          <div className="overlay-message">You have earned a cowboy hat</div>
          <img 
            src={isJumping ? yasir : jumping_yasir} 
            className='cowboy_yasir' 
            alt="Yasir"
          />
          <br></br>
          <div className="overlay-message"> You are now officially a 20 year old! </div>
          <div className="overlay-message">I made this game because you're always so fun and sweet to be around 
            so I hope it gave you a little fun in return. Thank you for playing and</div>
          <div className="overlay-message"> Thank you for being you :D</div>
          <br></br>
          <img
          className='back-btn'
          onClick={() => navigate('/happy_birthday')} 
          src={button_normal}
          alt="Back Button"
          />

        </div>
      )}
    </div>
  );
}

export default Game;
