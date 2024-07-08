import React from "react";
import Star from "../images/star.png";

const HeaderToko = () => {
  return (
    <div className="header-toko">
      <div className="header-toko-container">
        <div className="header-toko-image">
          <img src={Star} alt="Lamonde Palembang" />
        </div>
        <div className="header-toko-rating">
          <img src={Star} alt="Star" />
          <p>4.5</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderToko;
