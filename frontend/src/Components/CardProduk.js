import React, { useState, useEffect } from "react";
import "../card-produk.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const CardProduk = () => {
  const navigate = useNavigate();
  const { storeId } = useParams(); // Ambil storeId dari parameter URL
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/products/bystore/${storeId}`);
        setProducts(response.data.data);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    if (storeId) {
      fetchProducts();
    }
  }, [storeId]);

  const handleCardClick = (productId) => {
    navigate(`/productdetail/${productId}`);
  };

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <div className="container-card-produk">
      {products.length === 0 ? (
        <p>Produk belum tersedia atau toko belum menambahkan produk.</p>
      ) : (
        products.map((product) => (
          <div className="card-produk" key={product._id} onClick={() => handleCardClick(product._id)}>
            <div className="container-gambar-produk">
              <img src={product.image || 'default-image-url'} alt={product.name} />
            </div>

            <div className="container-deskripsi-produk">
              <div className="container-nama-produk">
                <h3>{product.name}</h3>
              </div>

              <div className="container-harga-produk">
                <p>Rp {product.price.toLocaleString('id-ID')}</p>
              </div>

              <div className="container-produk-terjual">
                <p>{product.sold}</p>
                <p>Terjual</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardProduk;
