import { useState } from "react";
import axios from 'axios';

const InfoForm = ({user, setUser, handleClick}) => {

  const [userValue, setUserValue] = useState({
    username: "",
    biography: ""
  })

    const handleChange = (event) => {
      const { name, value } = event.target;
      setUserValue({
          ...userValue,
          [name]: value
        })
    }

    const handleSubmit = (event) => {
      event.preventDefault();


      const updatedData = {};

      if (userValue.username !== "") {
        updatedData.username = userValue.username;
      }
    
      if (userValue.biography !== "") {
        updatedData.biography = userValue.biography;
      }

      const token = localStorage.getItem('token'); // Récupérer le jeton d'authentification stocké dans le stockage local
      console.log(token)

      axios.patch('http://localhost:3000/user/me', updatedData, {
      headers: {
        'Authorization': `Bearer ${token}`, // Ajouter le jeton d'authentification à l'en-tête de la demande
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        // Mettre à jour l'état avec les nouvelles données
        // setUser({
        //   username: response.data.username,
        //   bigraphie: response.data.biographie
        // });
        console.log(user)
      })
      .catch(error => {
        console.error(error);
      });
    }

    return (
       
    <form className="infos-container" onSubmit={handleSubmit}>
        <div className="infos-box">
        <div className='infos-left'>
        <label>
          Pseudo:
        <input type="text" name="username" value={userValue.username} className='infos' placeholder={user.username} onChange={handleChange}/> 
        </label>
        </div>
        <label>
          Bio:
        <input type="text" name="biography" value={userValue.biography} className='infos'  placeholder={user.biography} onChange={handleChange}/>
        </label>
        </div>
        <button className="modify-btn" >Enregistrer</button>
    </form> 
    )
}

export default InfoForm;