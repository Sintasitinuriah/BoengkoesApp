import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavbarSearching from "../Components/NavbarSearching";
import "../productdetail.css";
import Variant from "../Components/variant";
import Quantity from "../Components/quantity";
import Buttonbeli from "../Components/Buttonbeli";
import ButtonKeranjang from "../Components/Buttonkeranjang";
import HeaderTokoChat from "../Components/HeaderTokoChat";
import Deskripsi from "../Components/Deskripsi";
import Footer from "../Components/Footer";
import CardProduk from "../Components/CardProduk";

const Productdetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/products/${productId}`);
        console.log("Product data:", response.data.data); // Logging product data
        setProduct(response.data.data);
      } catch (err) {
        console.error("Failed to fetch product", err); // Logging error
        setError('Failed to fetch product');
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail-page">
      <NavbarSearching />
      <div className="section-1">
        <img src={product.image || 'default-image-url'} alt={product.name} />

        <div className="container-detail">
          <h1>{product.name}</h1>

          <div className="container-harga">
            <p>Rp</p>
            <p>{product.price.toLocaleString('id-ID')}</p>
          </div>

          <div className="container-stok">
            <p>Stok</p>
            <p>{product.stock}</p>
          </div>

          {/* <div className="container-jenis">
            <p>Varian :</p>
            <Variant variants={product.variants} />
          </div> */}

          <div className="container-kuantitas">
            <p>Kuantitas</p>
            <Quantity />
          </div>

          <div className="container-button">
            <ButtonKeranjang product={product} />
            <Buttonbeli product={product} />
          </div>
        </div>
      </div>
      <div className="section-2">
        <HeaderTokoChat store={product.store} />
      </div>

      <div className="section-3">
        <Deskripsi description={product.description} />
      </div>

      <div className="section-4">
        <div className="container-rekomendasi">
          <h1>Produk Rekomendasi Kami</h1>
        </div>
      </div>

      <div className="section-5">
        <CardProduk storeId={product.store._id} />
      </div>

      <Footer />
    </div>
  );
};

export default Productdetail;

