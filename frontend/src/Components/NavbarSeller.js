import React from "react";
import "../navbarseller.css";
import Logo from "../images/logo-chef.png";
import Bag from "../images/shopping-bag.png";
import Profile from "../images/profile.png";
import Searchbar from "./Searchbar";
import Navigasi from "./Navigasi";
import NavigasiSeller from "./NavigasiSeller";

const NavbarSeller = () => {
  return (
    <div className="container-navbar-seller">
      <div className="logo-seller">
        <img src={Logo} alt="Boengkoes Logo" />
      </div>

      <div className="container-searchbar-seller">
        <img src={Bag} alt="bag" />
        <img src={Profile} alt="profile-seller" />
        <Searchbar></Searchbar>
        <NavigasiSeller></NavigasiSeller>
      </div>
      <div className="container-icon-seller"></div>
    </div>
  );
};

export default NavbarSeller;
