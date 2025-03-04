import './letter.css';
import '../global.css';

function Letter({image_link}) {
    return (
        <div className='main-letter-div'>
            <img src={image_link} alt="Letter" />
        </div>
    );
}

export default Letter;