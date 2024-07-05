import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/Homepage';
import Beranda from './pages/Beranda';
import Cartpage from './pages/Cartpage';
import Profile from './Components/Profile';
import './App.css';
import Storepage from './pages/Storepage';

function App() {
  const isAuthenticated = false; 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/store" element={<Storepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
