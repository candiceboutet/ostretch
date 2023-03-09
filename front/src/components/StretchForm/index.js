import { useState } from "react";
import axios from 'axios';


const StretchForm = ({stretch, setStretch, id, setOnEdit}) => {
    const [userValue, setUserValue] = useState({
        title: "",
        description_content: ""
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userValue)
        const updatedData = {};
        if (userValue.title !== "") {
            updatedData.title = userValue.title;
          }
        
        if (userValue.description_content !== "") {
            updatedData.description_content = userValue.description_content;
          }

        const token = localStorage.getItem('token'); // Récupérer le jeton d'authentification stocké dans le stockage local

      axios.patch(`${process.env.REACT_APP_BASE_URL}/stretches/${id}`, updatedData, {
      headers: {
        'Authorization': `Bearer ${token}`, // Ajouter le jeton d'authentification à l'en-tête de la demande
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/stretches/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const stretchFound = response.data;
          setStretch(stretchFound);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch(error => {
        console.error(error);
      });
      setOnEdit(false);
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
      setUserValue({
          ...userValue,
          [name]: value
        })
    }
    return (
        <form className="infos-container" onSubmit={handleSubmit}>
     <p>
          Nom de l'étirement:
      </p>
        <input type="text" name="title" value={userValue.title} className='infos' placeholder={stretch.title} onChange={handleChange}/> 
      
        <p>
          Description:
        </p>
        <textarea rows="5" cols="33" type="text" name="description_content" value={userValue.desciption_content} className='infos'  placeholder={stretch.description_content} onChange={handleChange}/>

        <button className="modify-btn" >Enregistrer</button>
    </form> 
    )
}

export default StretchForm;
