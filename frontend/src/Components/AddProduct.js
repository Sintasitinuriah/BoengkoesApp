import React, { useState } from "react";
import "../addproduct.css";
import NavbarSeller from "./NavbarSeller";
import FormNamaProduk from "./FormNamaProduk";
import FormHargaProduk from "./FormHargaProduk";
import FormStokProduk from "./FormStokProduk";
import FormKategoriProduk from "./FormKategoriProduk";
import FormDeskripsiProduk from "./FormDeskripsiProduk";
import ButtonKembali from "./ButtonKembali";
import ButtonTambah from "./ButtonTambah";

const AddProduct = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="product-add-page">
      <NavbarSeller />
      <div className="container-besar-tambah-produk">
        <div className="container-tengah-tambah">
          <h2>Tambah Produk</h2>
          <div className="container-form-tambah-produk">
            <p>Foto Produk</p>
            <div className="submission-foto-produk">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
              {image ? (
                <img src={image} alt="Preview" className="image-preview" />
              ) : (
                <span>Upload foto</span>
              )}
            </div>
            <FormNamaProduk />
            <FormHargaProduk />
            <FormStokProduk />
            <FormKategoriProduk />
            <FormDeskripsiProduk />
          </div>
          <div className="container-button-tambah-kembali">
            <ButtonKembali />
            <ButtonTambah />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

// import React from "react";
// import "../addproduct.css";
// import NavbarSeller from "./NavbarSeller";
// import FormNamaProduk from "./FormNamaProduk";
// import FormHargaProduk from "./FormHargaProduk";
// import FormStokProduk from "./FormStokProduk";
// import FormKategoriProduk from "./FormKategoriProduk";
// import FormDeskripsiProduk from "./FormDeskripsiProduk";
// import ButtonKembali from "./ButtonKembali";
// import ButtonTambah from "./ButtonTambah";

// const AddProduct = () => {
//   return (
//     <div className="product-add-page">
//       <NavbarSeller></NavbarSeller>

//       <div className="container-besar-tambah-produk">
//         <div className="container-tengah-tambah">
//           <h2>Tambah Produk</h2>
//           <div className="container-form-tambah-produk">
//             <p>Foto Produk</p>

//             <div className="submission-foto-produk">upload foto</div>
//             <FormNamaProduk></FormNamaProduk>
//             <FormHargaProduk></FormHargaProduk>
//             <FormStokProduk></FormStokProduk>
//             <FormKategoriProduk></FormKategoriProduk>
//             <FormDeskripsiProduk></FormDeskripsiProduk>
//           </div>
//           <div className="container-button-tambah-kembali">
//             <ButtonKembali></ButtonKembali>
//             <ButtonTambah></ButtonTambah>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;
