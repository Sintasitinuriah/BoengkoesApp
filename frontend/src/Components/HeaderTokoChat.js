import React, { useEffect, useState } from "react";
import Star from "../images/star.png";
import FotoProfil from "../images/pp-lamonde.png";
import Facebook from "../images/facebook-colored.png";
import Instagram from "../images/instagram-colored.png";
import Whatsapp from "../images/whatsapp-colored.png";
import "../headertokochat.css";
import ButtonChat from "./Buttonchat";
import ButtonKunjungiToko from "./Buttonkunjungitoko";
import axios from 'axios';

const HeaderTokoChat = ({ store }) => {
  const [productCount, setProductCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://boengkosapps-039320043b7f.herokuapp.com/api/products/bystore/${store._id}`);
        console.log("Products data:", response.data.data); // Logging products data
        setProductCount(response.data.data.length);
      } catch (err) {
        console.error("Failed to fetch products", err); // Logging error
        setError('Failed to fetch products');
      }
    };

    if (store && store._id) {
      fetchProducts();
    }
  }, [store]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!store) {
    return <p>Loading...</p>;
  }

  const handleInstagramClick = () => {
    if (store && store.socialMedia && store.socialMedia.instagram) {
      window.open(store.socialMedia.instagram, "_blank");
    }
  };

  const handleWhatsappClick = () => {
    if (store && store.socialMedia && store.socialMedia.whatsapp) {
      window.open(store.socialMedia.whatsapp, "_blank");
    }
  };

  return (
    <div className="container-header">
      <div className="kiri">
        <div className="container-profil">
          <img src={store.image || FotoProfil} alt="Profile" />
        </div>
        <div className="container-title">
          <h2 className="nama-toko">{store.name}</h2>
          <div className="address-container">
            <p>{store.district}</p>, 
            <p>{store.city}</p>
          </div>
          <div className="container-button-layanan">
            <ButtonChat />
            <ButtonKunjungiToko storeId={store._id}/>
          </div>
        </div>
      </div>
      <div className="container-title-produk">
        <h3>Produk</h3>
        <p>{productCount}</p>
      </div>
      <div className="container-title-rating">
        <h3>Rating</h3>
        <div className="star">
          <img src={Star} alt="Star" />
          <p>{store.rating}</p>
        </div>
      </div>
      <div className="container-social">
        <h3>Sosial Media</h3>
        <div className="container-logo-sosmed">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" onClick={handleInstagramClick} />
          <img src={Whatsapp} alt="Whatsapp" onClick={handleWhatsappClick} />
        </div>
      </div>
    </div>
  );
};

export default HeaderTokoChat;
