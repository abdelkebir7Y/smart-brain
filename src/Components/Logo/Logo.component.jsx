import Tilt from 'react-tilt';
import './Logo.style.css';
import brain from './logo.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 pointer pa2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 
                    <img src={brain} alt='logo' /> 
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;