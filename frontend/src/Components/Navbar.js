import React from 'react';
import logo from '../images/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li><a href="Beranda">Beranda</a></li>
        <li><a href="popular">Toko Populer</a></li>
        <li><a href="/register">Daftar</a></li> 
        <li>
          <button className="button-yellow" onClick={handleLoginClick}>
            Masuk
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
