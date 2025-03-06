import React from 'react';
import './Game.css';
import soccerball from './images/soccerball.svg';

function Game() {
  return (
    <div>
      <div className='NavBar'>
        <div className='nav-title'> Soccer Game</div>
        <div className='scoreboard'>
          <img className='soccer-logo' src={soccerball} />
          <div className='score'> 0 </div>
        </div>
      </div>
      <div className="soccer-background">
      </div>
    </div>
    
  );
}
export default Game;
