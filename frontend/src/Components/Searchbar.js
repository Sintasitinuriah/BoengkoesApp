import React from "react";
import "../searchbar.css";
import iconSearch from "../images/icon-search.png";

const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <img src={iconSearch} alt="Search Icon" className="search-icon" />
      <input
        type="text"
        placeholder="Cari di toko Lamonde Palembang"
        className="search-input"
      />
    </div>
  );
};

export default Searchbar;
