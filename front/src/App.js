import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stretch from './pages/Stretch';
import Stretches from './pages/Stretches';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';




const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stretches' element={<Stretches />} />
        <Route path='/stretch' element={<Stretch />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;