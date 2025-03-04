import './letter.css';
import '../global.css';

function Letter({image_link}) {
    return (
        
            <img className='main-letter-div'src={image_link} alt="Letter" />
        
    );
}

export default Letter;