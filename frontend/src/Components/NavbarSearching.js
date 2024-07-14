import React from "react";
import "../navbarsearching.css";
import Logo from "../images/logo-chef.png";
import Bag from "../images/shopping-bag.png";
import Profile from "../images/profile.png";
import Searchbar from "./Searchbar";
import Navigasi from "./Navigasi";
import { useNavigate } from "react-router-dom";

const NavbarSearching = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleProfileClick = () => {
    navigate("/profilepage");
  };

  return (
    <div className="container-navbar-searching">
      <div className="logo">
        <img src={Logo} alt="Boengkoes Logo" />
      </div>

      <div className="container-searchbar">
        <img src={Bag} alt="bag" onClick={handleCartClick} />
        <img src={Profile} alt="profile" onClick={handleProfileClick} />
        <Searchbar></Searchbar>
        <Navigasi></Navigasi>
      </div>
      <div className="container-icon"></div>
    </div>
  );
};

export default NavbarSearching;
