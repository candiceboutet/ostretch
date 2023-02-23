import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import './styles.scss';

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(true)
    return (
        <div className="nav-container">
            <img src={logo} alt="OStretch logo" />
            <ul className="nav-links">
            <NavLink className="home" to="/">
                Accueil 
            </NavLink>
            <NavLink className="stretches" to="/stretches">
                Étirements
            </NavLink>
            </ul>
            <div className='login-profile'>
            {
                isLogged ?  <FaRegUserCircle className='user' /> : <NavLink to="/login" className="login">Login</NavLink>
            }
            </div>
        
        </div>
    )
}

export default Navbar;