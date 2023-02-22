import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stretches from './pages/Stretches';
import Login from './pages/Login';
import Signup from './pages/Signup';



const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stretches' element={<Stretches />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;