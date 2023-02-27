import logo from '../../assets/img/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import './styles.scss';
import Toggle from '../Toggle';

const Navbar = () => {
    const [isLogged, setIsLogged] = useState(true)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    console.log(dropdownOpen);

    const handleClick = () => {
       setDropdownOpen(!dropdownOpen);
      };

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
                isLogged ?  <FaRegUserCircle className='user' onClick={handleClick} /> : <NavLink to="/login" className="login">Login</NavLink>
            }
            </div>
            {
            dropdownOpen ? <Toggle /> : null
            }
        </div>
    )
}

export default Navbar;