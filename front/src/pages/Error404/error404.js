import React from 'react';

const Error404 = () => {
  return (
    <div>
      <h1>Erreur 404: Page non trouvée</h1>
      <p>Désolé, la page que vous recherchez est introuvable.</p>
      <img src={`${process.env.PUBLIC_URL}/femme yoga error 404.jpg`} alt="Erreur 404" />
    </div>
  );
}

export default Error404;