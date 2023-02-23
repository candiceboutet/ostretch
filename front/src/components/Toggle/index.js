import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './styles.scss';

const Toggle = () => {
    
    return (
        <div className="menu">
<NavLink to="/my-space" className="space">Mon espace </NavLink>
<NavLink to="/" className="space">Déconnexion </NavLink>
        </div>
    )}

    export default Toggle;