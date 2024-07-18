import React, { useEffect, useState } from "react";
import "../productseller.css";
import TasMoi from "../images/tas-moi.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import alertify from "alertifyjs";

const ProductSeller = () => {
  const userId = localStorage.getItem("userId");
  const updateProduct = async () => {
    console.log("putDataStore");
    try {
      const response = await axios.put(
        `https://boengkosapps-039320043b7f.herokuapp.com/api/products/${userId}/`
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

  const deleteProduct = async ({ id }) => {
    console.log("checkId", id);
    try {
      const response = await axios.delete(
        `https://boengkosapps-039320043b7f.herokuapp.com/api/products/${id}`
      );
      console.log("delete", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        alert(error?.message);
        return;
      }
      alert(error?.message);
    }
  };

  // const handleDelete = (id) => {
  //   alertify.confirm("Are you sure you want to delete this product?", () => {
  //     deleteProduct({ id });
  //   });
  //   // deleteProduct({ id });
  //   // window.location.reload();
  //   getProduct();
  // };

  const handleDelete = async (id) => {
    try {
      await new Promise((resolve, reject) => {
        alertify.confirm(
          "Kamu yakin ingin menghapus produk ini ?",
          async () => {
            try {
              await deleteProduct({ id });
              resolve();
            } catch (error) {
              reject(error);
            }
          }
        );
      });
      await getProduct(); // Pastikan ini dipanggil setelah produk dihapus
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // const { userId } = useParams();
  // console.log("User id :", userId);

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    // console.log("getDataStore");
    try {
      const response = await axios.get(
        `https://boengkosapps-039320043b7f.herokuapp.com/api/products/bystore/${userId}/`
      );
      console.log("response", response.data);
      setProduct(response.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error);
        // alert(error?.message);
        return;
      }
      // alert(error?.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleTambah = () => {
    navigate("/addproduct");
  };
  // console.log("product :", product);

  const navigate = useNavigate();

  return (
    <div>
      {product === null ? (
        <div>
          <img src={TasMoi} alt="Tas-moi" />
          <p style={{ textAlign: "center" }}>
            Sepertinya kamu belum menambahkan produk, silahkan{" "}
            <span
              style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
              onClick={handleTambah}
            >
              tambahkan
            </span>{" "}
            produk terlebih dahulu
          </p>
        </div>
      ) : (
        <div className="ini-kelas-pokoknya">
          {product?.map((e) => (
            <div className="container-produk-seller">
              <img src={e?.image} alt=" Foto-produk" />
              <h3 className="label-nama-produk">{e?.name}</h3>

              {/* Harga Produk */}
              <div className="container-harga-produk-penjual">
                <p className="label-harga-produk">Harga Produk</p>
                <div className="textfield-harga-produk">
                  <input type="text" placeholder={e?.price} />
                </div>
              </div>

              {/* Stok Produk */}
              <div className="container-stok-produk-penjual">
                <p className="label-stok-produk">Stok</p>
                <div className="textfield-stok-produk">
                  <input type="text" placeholder={e?.stock} />
                </div>
              </div>

              {/*  Terjual */}
              <div className="container-terjual">
                <p className="label-terjual">Terjual</p>
                <div className="textfield-terjual">
                  <input type="text" placeholder={e?.sold} />
                </div>
              </div>

              {/* Kategori */}
              <div className="container-kategori-produk">
                <p className="label-kategori-produk">Kategori</p>
                <div className="select-kategori">
                  <select>
                    <option value="">{e?.category?.name}</option>
                    <option value="food & drink">Makanan & minuman</option>
                    <option value="pakaian">Pakaian</option>
                    <option value="mainan">Mainan</option>
                    {/* <option value="produk-kecantikan">Produk Kecantikan</option> */}
                  </select>
                </div>
              </div>

              <div className="wrapper-deskripsi">
                <p className="label-deskripsi">Deskripsi</p>
                <textarea placeholder={e?.description}></textarea>
              </div>

              <div className="seller-hapus-produk">
                <button onClick={() => handleDelete(e?._id)}>
                  Hapus Produk
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSeller;
