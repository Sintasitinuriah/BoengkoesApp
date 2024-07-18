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
import axios from "axios";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(null);
  const [store, setStore] = useState("");

  console.log("gambar :", image);
  console.log("nama :", name);
  console.log("price :", price);
  console.log("stok :", stock);
  console.log("kategori :", category);
  console.log("deskripsi :", description);

  const userId = localStorage.getItem("userId"); // Mengambil userId dari localStorage

  const addProduct = async () => {
    const body = {
      // image: image,
      name: name,
      description: description,
      price: price,
      category: category,
      stock: stock,
      store: userId,
    };

    try {
      const response = await axios.post(
        `https://boengkosapps-039320043b7f.herokuapp.com/api/products`,
        body
      );
      console.log("response", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        alert(error?.message);
        return;
      }
      alert(error?.message);
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleAdd = () => {
    addProduct();
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
            {/* <FormNamaProduk /> */}
            <form className="container-form-nama-produk">
              <p className="label-nama-produk">Nama produk</p>
              <div className="form-nama-produk">
                <input
                  type="text"
                  placeholder="Masukkan nama produk"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </form>

            {/* <FormHargaProduk /> */}
            <form className="container-form-harga-produk">
              <p className="label-harga-produk">Harga</p>
              <div className="form-harga-produk">
                <input
                  type="text"
                  placeholder="Masukkan harga produk"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </form>

            {/* <FormStokProduk /> */}

            <form className="container-form-stok-produk">
              <p className="label-stok-produk">Stok</p>
              <div className="form-stok-produk">
                <input
                  type="text"
                  placeholder="Masukkan stok produk"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
            </form>

            {/* <FormKategoriProduk /> */}

            <form className="container-form-kategori-produk">
              <p className="label-form-kategori-produk">Kategori</p>
              <div className="select-form-kategori">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value={""}>Pilih Kategori</option>
                  <option value="food & drink">Makanan & minuman</option>
                  <option value="pakaian">Pakaian</option>
                  <option value="mainan">Mainan</option>
                </select>
              </div>
            </form>

            {/* <FormDeskripsiProduk /> */}
            <div className="container-form-deskripsi-produk">
              <p className="hint-form-deskripsi-produk">Deskripsi</p>
              <div className="textarea-form-deskripsi-produk">
                <textarea
                  placeholder="Masukkan deskripsi produk"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="container-button-tambah-kembali">
            <ButtonKembali />

            {/* <ButtonTambah /> */}
            <div className="button-tambah">
              <button type="button" onClick={handleAdd}>
                Tambah Produk
              </button>
            </div>
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
