import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD
import './styles/index.scss';
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> e01fd6e5ba220c7cc07add34b8df73fc4c5bd3d1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);