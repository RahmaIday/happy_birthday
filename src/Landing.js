import React, { useState } from 'react';
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

function Landing() {
    const [buttonImage, setButtonImage] = useState(button_normal);

    return (
        <center>
            <div className='landing-phrase-container'>
                <br></br>

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
                <br></br>
                <br></br>

                <div 
                    className='start-btn' 
                    onMouseEnter={() => setButtonImage(button_pressed)}
                    onMouseLeave={() => setButtonImage(button_normal)}
                >
                    <img src={buttonImage} alt="Start Button" />
                </div>
            </div>
        </center>
    );
}

export default Landing;
