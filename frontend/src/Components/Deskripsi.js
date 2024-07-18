import React from "react";
import "../deskripsi.css";

const Deskripsi = ({ description }) => {
  // state untuk melacak menu yang aktif, default ke 'Deskripsi'
  const [activeMenu, setActiveMenu] = React.useState("Deskripsi");

  const handleClick = (e, menu) => {
    e.preventDefault();
    setActiveMenu(menu);
  };

  return (
    <div className="container-rincian">
      <div className="container-jenis">
        <a
          href="/"
          className={activeMenu === "Deskripsi" ? "active" : ""}
          onClick={(e) => handleClick(e, "Deskripsi")}
        >
          Deskripsi
        </a>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Deskripsi;
