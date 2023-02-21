import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stretches from './pages/Stretches';

// test yann

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stretches' element={<Stretches />} />
      </Routes>
    </div>
  );
};

export default App;