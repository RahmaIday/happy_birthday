import './letter.css';

function Letter({image_link}) {
    return (
        <div className='main-letter-div'>
            <img className='main-letter-div' src={image_link} alt="Letter" />
        </div>
    );
}

export default Letter;