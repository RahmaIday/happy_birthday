import './Landing.css';
import H from './header_font/H.svg';
import A from './header_font/A.svg';
import P from './header_font/P.svg'
import Y from './header_font/Y.svg'
import B from './header_font/B.svg'
import I from './header_font/I.svg'
import R from './header_font/R.svg'
import T from './header_font/T.svg'
import D from './header_font/D.svg'
import M from './header_font/M.svg'
import C from './header_font/C.svg'
import N from './header_font/N.svg'
import EX from './header_font/EX.svg'
import Letter from './components/letter';
import button_pressed from './start_button/button-pressed.svg'
import button_normal from './start_button/button-normal.svg'

function Landing() {
    return (
        <div className='land-background'>
            <div className='word-flex'>
                <Letter image_link={H}></Letter>
                <Letter image_link={A}></Letter>
                <Letter image_link={P}></Letter>
                <Letter image_link={P}></Letter>
                <Letter image_link={Y}></Letter>
            </div>
            <div className='word-flex'>
                <Letter image_link={B}></Letter>
                <Letter image_link={I}></Letter>
                <Letter image_link={R}></Letter>
                <Letter image_link={T}></Letter>
                <Letter image_link={H}></Letter>
                <Letter image_link={D}></Letter>
                <Letter image_link={A}></Letter>
                <Letter image_link={Y}></Letter>
            </div>
            <div className='word-flex'>
                <Letter image_link={M}></Letter>
                <Letter image_link={A}></Letter>
                <Letter image_link={C}></Letter>
                <Letter image_link={H}></Letter>
                <Letter image_link={A}></Letter>
                <Letter image_link={N}></Letter>
                <Letter image_link={EX}></Letter>
            </div>

            <img src={button_normal}/>
            
        </div>
    );
}

export default Landing;