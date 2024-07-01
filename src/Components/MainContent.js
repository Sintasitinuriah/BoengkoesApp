import React from 'react';
import '../App.css';
import sampleImage from '../images/gambar1.png';

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="text-content">
          <p>Halo sobat jajan!</p>
          <h1>Temukan Produk Unik di Seluruh Indonesia</h1>
          <h3><span>Boengkoes</span> siap bantu kamu buat cari produk unik dari setiap daerah Indonesia</h3>
          <button className="button-yellow">Mulai Belanja</button>
        </div>
        <div className="image-content">
          <img src={sampleImage} alt="Gambar" />
        </div>
      </div>

      <main className="App-main">
        <section className="Hero">
          <h2>Siap bantu kamu buat cari produk unik</h2>
          <p>Dori antiop dourah di Indonesia</p>
          <button>Boengkoesin Aja!</button>
        </section>

        <section className="PopularStores">
          <h2>Toko Paling Populer</h2>
          <div className="stores">
            <div className="store">
              <img src="https://i.imgur.com/4k5zF9q.png" alt="Store 1" />
              <h3>Store 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="store">
              <img src="https://i.imgur.com/4k5zF9q.png" alt="Store 2" />
              <h3>Store 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="store">
              <img src="https://i.imgur.com/4k5zF9q.png" alt="Store 3" />
              <h3>Store 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>

        <section className="About">
          <h2>Perusahaan</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et ante eget lectus mollis aliquam. Nullam sit amet quam eu libero semper varius. Maecenas nec enim eget arcu consequat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et ante eget lectus mollis aliquam. Nullam sit amet quam eu libero semper varius. Maecenas nec enim eget arcu consequat ultrices.</p>
        </section>
      </main>
    </div>
  );
}

export default MainContent;
