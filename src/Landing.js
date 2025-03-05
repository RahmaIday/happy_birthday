import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Landing.css';
import './global.css';
import H from './header_font/H.svg';
import A from './header_font/A.svg';
import P from './header_font/P.svg';
import Y from './header_font/Y.svg';
import B from './header_font/B.svg';
import I from './header_font/I.svg';
import R from './header_font/R.svg';
import T from './header_font/T.svg';
import D from './header_font/D.svg';
import M from './header_font/M.svg';
import C from './header_font/C.svg';
import N from './header_font/N.svg';
import EX from './header_font/EX.svg';
import Letter from './components/letter';
import button_pressed from './start_button/button-pressed.svg';
import button_normal from './start_button/button-normal.svg';
import dark_balloon from './images/balloon.svg';
import light_balloon from './images/balloon light.svg';
import yasir from './images/yasir.svg';

function Landing() {
  const [buttonImage, setButtonImage] = useState(button_normal);
  const [balloons, setBalloons] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const numBalloons = 10;
    const newBalloons = [];
    const spacing = 100 / numBalloons;

    for (let i = 0; i < numBalloons; i++) {
      newBalloons.push({
        id: i,
        left: `${spacing * i}vw`,
        delay: `${Math.random() * 2}s`,
        balloonType: i % 2 === 0 ? dark_balloon : light_balloon,
      });
    }

    setBalloons(newBalloons);
  }, []);

  return (
    <center>
      <div className='full-height-flex'>
        <div className='landing-phrase-container'>
          <div className='word-flex'>
            <Letter image_link={H} />
            <Letter image_link={A} />
            <Letter image_link={P} />
            <Letter image_link={P} />
            <Letter image_link={Y} />
          </div>
          <div className='word-flex'>
            <Letter image_link={B} />
            <Letter image_link={I} />
            <Letter image_link={R} />
            <Letter image_link={T} />
            <Letter image_link={H} />
            <Letter image_link={D} />
            <Letter image_link={A} />
            <Letter image_link={Y} />
          </div>
          <div className='word-flex'>
            <Letter image_link={M} />
            <Letter image_link={A} />
            <Letter image_link={C} />
            <Letter image_link={H} />
            <Letter image_link={A} />
            <Letter image_link={N} />
            <Letter image_link={EX} />
          </div>
        <img src={yasir} className='yasir'></img>

        </div>
        
        <img
          className='start-btn'
          onMouseEnter={() => setButtonImage(button_pressed)}
          onMouseLeave={() => setButtonImage(button_normal)}
          onClick={() => navigate('/happy_birthday/game')} // Navigate on click
          src={buttonImage}
          alt="Start Button"
        />

        {balloons.map((balloon) => (
          <img
            key={balloon.id}
            className='balloon'
            src={balloon.balloonType}
            alt="Balloon"
            style={{
              left: balloon.left,
              animationDelay: balloon.delay,
            }}
          />
        ))}
      </div>
    </center>
  );
}

export default Landing;
