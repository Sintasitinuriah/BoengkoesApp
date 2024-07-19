import React from "react";
import "../navbarseller.css";
import Logo from "../images/logo-chef.png";
import Bag from "../images/shopping-bag.png";
import Profile from "../images/profile.png";
import Searchbar from "./Searchbar";
import Navigasi from "./Navigasi";
import NavigasiSeller from "./NavigasiSeller";
import { useNavigate } from "react-router-dom";

const NavbarSeller = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const handleProfileClick = () => { // Mengambil userId dari localStorage
    if (userId) {
      navigate(`/profilepageseller/${userId}`);
    } else {
      // Penanganan jika userId tidak ditemukan
      console.error("User ID not found");
    }
  };
  const handleCartClick = () => {
    navigate(`/cart/${userId}`);
  };
  return (
    <div className="container-navbar-seller">
      <div className="logo-seller">
        <img src={Logo} alt="Boengkoes Logo" />
      </div>

      <div className="container-searchbar-seller">
        {/* <img src={Bag} alt="bag" onClick={handleCartClick} /> */}
        <img src={Profile} alt="profile" onClick={handleProfileClick} />
        <Searchbar></Searchbar>
        <NavigasiSeller></NavigasiSeller>
      </div>
      <div className="container-icon-seller"></div>
    </div>
  );
};

export default NavbarSeller;
