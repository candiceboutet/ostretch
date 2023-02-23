
import './styles.scss';
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const Login = () => {

const [userValue, setUserValue] = useState({
    email: "",
    password: "",
})

const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValue({
        ...userValue,
        [name]: value
    })
}
const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(userValue);
}

    return (
<div className="login">
        <div className="box-container">
            <img src={logo}></img>
            <h2>Se connecter</h2>

            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
            <input type="email" name="email" placeholder="Email"value={userValue.email} onChange={handleChange}/>
            </div>

          <div className="input-group">
            <input type="password" name="password" placeholder="Mot de passe" value={userValue.password} onChange={handleChange}/>
          </div>
          <button className="primary">Connexion</button>
          <p>Pas encore inscrit ?</p>
          <NavLink to="/signup" className="signup">Créer un compte</NavLink>
        </form>
        </div>
    </div>
    )
}

export default Login;