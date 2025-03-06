import { useState, useEffect, useRef } from "react";
import './Info.css';
import yasir from './images/yasir.svg';
import waving_yasir from './images/waving_yasir.svg';
import button_normal from './start_button/button-normal.svg';
import { useNavigate } from 'react-router-dom'; 

export default function Info() {
  const navigate = useNavigate(); 
  const text = 
  `Hello Machan!
   Happy birthday, you are turning 20, and thus I have a little mission for you.
   As you can probably already tell. The lil guy waving on the left is you, Yasir. 
   But he isn't 20 YET :( He is currently 0 years old (ok I KNOW that's impossible but shut up and play along).
   Your mission is to catch 20 soccer balls as FC Barcelona's goalie. Only then will he become 20 and receive the ultimate item.   
   
   HOW TO PLAY: 
   If you are on your laptop. You press the Left and Right arrows to move across the screen and catch the soccer balls that are coming at you.
   If you are on your phone click and drag mini-Yasir left and right to move him. 
   
   P.S. I actually don't know how disproportional and glitchy the phone version is going to be so, apologies in advance.
   
   Anyways click the button below to PLAY. 

   Have fun, 
   Your Machi, 
   Rahma!
   `;
  const speed = 100;
  const [displayedText, setDisplayedText] = useState("");
  const [isWaving, setIsWaving] = useState(false);
  const [isTextComplete, setIsTextComplete] = useState(false); // New state
  const indexRef = useRef(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(typingInterval);
        setIsTextComplete(true); // Set to true when text is fully displayed
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const wavingInterval = setInterval(() => {
      setIsWaving((prev) => !prev);
    }, 400);

    return () => clearInterval(wavingInterval);
  }, []);

  return (
    <div>
      <div className="info-container">
        <img 
          src={isWaving ? waving_yasir : yasir} 
          className="waving-yasir" 
          alt="Yasir"
        />
        {/* Convert \n to <br /> */}
        <div className="type-text">
          {displayedText.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>

      {isTextComplete && ( // Only show the button after the text is complete
        <center>
          <img
            className='play-btn'
            onClick={() => navigate('/happy_birthday/game')} 
            src={button_normal}
            alt="Play Button"
          />
        </center>
      )}
    </div>
  );
}
