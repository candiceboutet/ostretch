import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stretch from './pages/Stretch';
import Stretches from './pages/Stretches';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Error404 from './pages/Error404/error404';
import MySpace from './pages/MySpace';



const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stretches' element={<Stretches />} />
        <Route path='/stretches/:id' element={<Stretch />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/my-space' element={<MySpace />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;