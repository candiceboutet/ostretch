
import Navbar from "../../components/Navbar";
import './styles.scss';
import logo from '../../assets/img/logo.svg';
import { useState } from "react";

const Signup = () => {

const [visitorValue, setVisitorValue] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
}
)
const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitorValue({
        ...visitorValue,
        [name]: value
    })
}
const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(visitorValue);
}

    return (
<div className="login">
        <Navbar />
        <div className="box-container">
            <img src={logo}></img>
            <h2>Créer un compte</h2>

            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" name="name" placeholder="Name" value={visitorValue.name} onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <input type="email" name="email" placeholder="Adresse mail" value={visitorValue.email} onChange={handleChange}/>
                </div>

                <div className="input-group">
                    <input type="password" name="password" placeholder="Mot de passe" value={visitorValue.password} onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <input type="password" name="confirm" placeholder="Confirmez le mot de passe" value={visitorValue.confirm} onChange={handleChange}/>
                </div>
                <button className="primary">S'inscrire</button>
            </form>
        

        </div>
    </div>
    )
}
export default Signup;