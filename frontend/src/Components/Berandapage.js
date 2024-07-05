import React from "react";
import Logotesla from "../images/logotesla.jpg";

const Berandapage = () => {
  return (
    <div className="beranda">
      <div className="logotesla">
        <img src={Logotesla} alt="Gambar" />
      </div>
      <div className="beranda-page">
        <div className="header">
          <p>Toko Terdekat</p>
        </div>

        <div className="toko-terdekat">
          <div className="toko">
            <img src="https://tokoterdekat.com/wp-content/uploads/2023/03/Toko-Terdekat-Palembang.png" alt="Toko Palembang Lamonde" />
            <h2>Palembang Lamonde</h2>
            <p>Dok.Ben</p>
          </div>

          <div className="toko">
            <img src="https://tokoterdekat.com/wp-content/uploads/2023/03/Toko-Terdekat-Palembang-2.png" alt="Toko Pempele Candy" />
            <h2>Pempele Candy</h2>
            <p>Dokben Kaos Oleh Oleh Khas</p>
          </div>

          <div className="toko">
            <img src="https://tokoterdekat.com/wp-content/uploads/2023/03/Toko-Terdekat-Palembang-3.png" alt="Toko Kusuma Souvenir" />
            <h2>Kusuma Souvenir</h2>
            <p>Palembang Harum</p>
          </div>

          <div className="toko">
            <img src="https://tokoterdekat.com/wp-content/uploads/2023/03/Toko-Terdekat-Palembang-4.png" alt="Toko Palembang Harum" />
            <h2>Palembang Harum</h2>
            <p>Dok.Ben</p>
          </div>
        </div>

        <div className="cari-produk">
          <h2>Mau Cari Produk di Daerah Lain?</h2>
          <p>Pilih lokasi dan cari produknya!</p>

          <div className="lokasi">
            <input type="text" placeholder="Masukkan nama lokasi" />
            <input type="text" placeholder="Cari produk unik dari seluruh indonesia" />
          </div>
        </div>

        <div className="toko-lain">
          <div className="toko">
            <img src="https://tokoterdekat.com/wp-content/uploads/2023/03/Toko-Terdekat-Bali.png" alt="Toko Krisna Oleh Oleh Khas Bali" />
            <h2>Krisna Toko Oleh Oleh Khas Bali</h2>
            <p>(Souvenir)</p>
          </div>

          <div className="toko">
            <img src="https://tokoterdekat.com/wp-content/uploads/2023/03/Toko-Terdekat-Bali-2.png" alt="Toko Krisna Oleh Oleh Khas Bali" />
            <h2>Krisna Oleh Oleh Khas Bali</h2>
            <p>(Souvenir)</p>
          </div>

          <div className="toko">
            <img src="https://tokoterdekat.com/wp-content/uploads/2023/03/Toko-Terdekat-Bali-3.png" alt="Toko Jepun Bali Oleh Oleh Bali" />
            <h2>Jepun Bali Oleh Oleh Bali</h2>
            <p>(Souvenir)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berandapage;