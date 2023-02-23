import { NavLink } from 'react-router-dom';

const Toggle = () => {


  return (

    <div className="menu">
        <NavLink to="/" className="space">Mon espace </NavLink>
        <NavLink to="/" className="space">Déconnexion </NavLink>
  </div>  
  );
}

    export default Toggle;