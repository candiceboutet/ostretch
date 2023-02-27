import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stretch from './pages/Stretch';
import Stretches from './pages/Stretches';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { useState } from 'react';


const App = () => {
  const [user, setUser]= useState('')
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = (item) => {
    setUser(item);
    setIsLogged(true)
  }
  
  const handleLogout = () => {
 setIsLogged(false);
  }

  return (
    <div className='App'>
      <Navbar isLogged={isLogged} onLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stretches' element={<Stretches />} />
        <Route path='/stretch' element={<Stretch />} />
        <Route path='/login' element={<Login onSubmitLoginForm={handleLogin} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;