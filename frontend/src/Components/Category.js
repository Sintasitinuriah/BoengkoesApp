import React from "react";
import "../category.css";

const Category = () => {
  // state untuk melacak menu aktif
  const [activeMenu, setActiveMenu] = React.useState(null);

  //   Menu Items
  const menuItems = [
    "Semua Produk",
    "Harga Terendah",
    "Harga Tertinggi",
    "Makanan & Minuman",
    "Kerajinan Tangan",
    "Pakaian",
    "Produk Kecantikan",
  ];

  //   Handle click event
  const handleMenuClick = (index) => {
    setActiveMenu(index);
  };

  return (
    <div className="section-2">
      <div className="container-category">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="/"
            className={activeMenu === index ? "active" : ""}
            onClick={(e) => {
              e.preventDefault(); // mencegah reload halaman
              handleMenuClick(index);
            }}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

// const Category = () => {
//   return (
//     <div className="section-2">
//       <div className="container-category">
//         <a href="/">Semua Produk</a>
//         <a href="/">Harga Terendah</a>
//         <a href="/">Harga Tertinggi</a>
//         <a href="/">Makanan & Minuman</a>
//         <a href="/">Kerajinan Tangan</a>
//         <a href="/">Pakaian</a>
//         <a href="/">Produk Kecantikan</a>
//       </div>
//     </div>
//   );
// };

export default Category;
