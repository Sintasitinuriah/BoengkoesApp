import React from "react";
import "../deskripsi.css";

const Deskripsi = () => {
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

      <p>
        Lamonde Chocomaltine adalah produk baru yang diluncurkan oleh Lamonde,
        Produk ini merupakan kombinasi unik dari cokelat dan malt, yang
        dirancang untuk memberikan rasa yang kaya dan lezat. Keunggulan utama
        dari Chocomaltine adalah rasa malt yang khas, yang memberikan sentuhan
        manis dan sedikit rasa karamel, dikombinasikan dengan cokelat yang
        creamy dan kaya.
      </p>
    </div>
  );
};

export default Deskripsi;
