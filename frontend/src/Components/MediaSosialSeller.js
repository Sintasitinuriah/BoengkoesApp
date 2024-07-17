import React from "react";
import "../mediasosialseller.css";

const MediaSosialSeller = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="container-profil-nomor-hp-seller">
      <p className="hint-seller">{placeholder}</p>
      <div className="textfield-nomor-hp-seller">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MediaSosialSeller;
