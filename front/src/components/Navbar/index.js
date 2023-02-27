import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import './styles.scss';
import Toggle from '../Toggle';

const Navbar = ({isLogged, onLogout}) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.log(isLogged)

    const handleClick = () => {
       setDropdownOpen(!dropdownOpen);
      };
      const handleClose = () => {
        setDropdownOpen(false)
      }

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
                isLogged ?  <FaRegUserCircle className='user' onClick={handleClick} /> : <NavLink to="/login" className="login">Login</NavLink>
            }
            </div>
            {
            dropdownOpen ? <Toggle onLogout={onLogout} onClose={handleClose} /> : null
            }
        </div>
    )
}

export default Navbar;