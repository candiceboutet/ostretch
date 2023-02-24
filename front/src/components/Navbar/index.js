import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import './styles.scss';

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(true)
    return (
        <div className="nav-container">
            <img src={logo} alt="OStretch logo" />
            <ul className="nav-links">
            <Link className="home" to="/">
                Accueil 
            </Link>
            <Link className="stretches" to="/stretches">
                Étirements
            </Link>
            </ul>
            <div className='login-profile'>
            {
                isLogged ?  <FaRegUserCircle className='user' /> : <Link to="/login" className="login">Login</Link>
            }
            </div>
        
        </div>
    )
}

export default Navbar;