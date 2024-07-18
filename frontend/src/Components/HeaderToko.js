import React, { useEffect, useState } from "react";
import Star from "../images/star.png";
import FotoProfil from "../images/pp-lamonde.png";
import Facebook from "../images/facebook-colored.png";
import Instagram from "../images/instagram-colored.png";
import Whatsapp from "../images/whatsapp-colored.png";
import "../headertoko.css";
import axios from 'axios';

const HeaderToko = ({ storeId }) => {
  const [store, setStore] = useState(null);
  const [productCount, setProductCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/v1/store/${storeId}`);
        setStore(response.data.data);
      } catch (err) {
        setError('Failed to fetch store');
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/products/bystore/${storeId}`);
        setProductCount(response.data.data.length);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    if (storeId) {
      fetchStore();
      fetchProducts();
    }
  }, [storeId]);

  if (!store) {
    return <p>Loading...</p>;
  }

  const handleInstagramClick = () => {
    if (store && store.socialMedia && store.socialMedia.instagram) {
      window.open(store.socialMedia.instagram, "_blank");
    }
  };

  const handleFacebookClick = () => {
    window.open("https://web.facebook.com/lamondepalembang/?locale=id_ID&_rdc=1&_rdr", "_blank");
  };

  const handleWhatsappClick = () => {
    if (store && store.socialMedia && store.socialMedia.whatsapp) {
      window.open(store.socialMedia.whatsapp, "_blank");
    }
  };

  return (
    <div className="section-1-header-toko">
      <div className="container-header-toko">
        {/* Kiri */}
        <div className="container-kiri">
          <div className="container-pp-toko">
            <img src={store.image || FotoProfil} alt="Profile" />
          </div>

          <div className="container-keterangan-toko">
            <h2 className="sebutan-nama-toko">{store.name}</h2>
            <div className="address-container">
              <p>{store.district}</p>, 
              <p>{store.city}</p>
            </div>
          </div>
        </div>
        {/* End of Kiri */}

        {/* title-produk */}
        <div className="container-jumlah-produk">
          <h3>Produk</h3>
          <p>{productCount}</p>
        </div>
        {/* end of title-produk */}

        {/* title-rating */}
        <div className="container-jumlah-rating">
          <h3>Rating</h3>
          <div className="ikon-bintang">
            <img src={Star} alt="Star" />
            <p>{store.rating}</p>
          </div>
        </div>
        {/* end of title-rating */}

        {/* social */}
        <div className="container-sosmed">
          <h3>Sosial Media</h3>
          <div className="container-logo-sosmed">
            <img src={Facebook} alt="Facebook" onClick={handleFacebookClick}/>
            <img
              src={Instagram}
              alt="Instagram"
              onClick={handleInstagramClick}
            />
            <img src={Whatsapp} alt="Whatsapp" onClick={handleWhatsappClick} />
          </div>
        </div>
        {/* end of social */}
      </div>
    </div>
  );
};

export default HeaderToko;
