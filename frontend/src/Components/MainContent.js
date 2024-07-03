import React from "react";
import "../App.css";
import sampleImage from "../images/Group.jpg";
import apimage from "../images/bakso.jpg";
import search from "../images/search.jpg";
import location from "../images/location.jpg";
import monetization from "../images/monetization.jpg";
import batik from "../images/batik.jpg";
import logo from "../images/logo.jpg";

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="text-content">
          <p>Halo sobat jajan!</p>
          <h1>Temukan Produk Unik di Seluruh Indonesia</h1>
          <h3>
            <span class="highlight">Boengkoes</span> siap bantu kamu buat cari
            produk unik dari setiap daerah Indonesia
          </h3>
          <button className="button-yellow">Mulai Belanja</button>
        </div>
        <div className="image-content">
          <img src={sampleImage} alt="Gambar" />
        </div>
      </div>

      <div class="doc">
        <div class="atuh">
          <img src={apimage} alt="Gambar" />
        </div>
        <div class="urang">
          <p>Halo sobat jajan!</p>
          <h1>Temukan Produk Unik di Seluruh Indonesia</h1>
          <h3>
            <span class="highlight">Boengkoes</span> siap bantu kamu buat cari
            produk unik
          </h3>
          <h3>dari setiap daerah Indonesia</h3>
        </div>
      </div>

      <main className="App-main">
        <section className="Hero">
          <div className="mouse">
            <p>Cari Oleh-Oleh?</p>
            <h1>
              <span class="highlight">Boengkoes</span>in Aja!
            </h1>
            <p>Sekarang beli oleh-oleh buat orang yang kamu sayang!</p>
            <p>Caranya gampang banget kok</p>
          </div>
          <div className="karet">
            <div className="kain">
              <img src={search} alt="search" />
              <h3>Cari produk</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="kain">
              <img src={location} alt="location" />
              <h3>isi alamat kamu</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="kain">
              <img src={monetization} alt="gambar" />
              <h3>Konfirmasi pembayaran</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
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

        <div className="content-wrapper">
          <div className="text-content">
            <p>Halo sobat jajan!</p>
            <h1>Jelajahi Sekarang</h1>
          </div>
          <div className="image-content">
            <img src={batik} alt="Gambar" />
          </div>
        </div>
        <section class="about">
          <div class="container">
            <div class="logo">
              <img src={logo} alt="Logo" />
              <h1>Boengkoes</h1>
            </div>
            <h2>Lokasi</h2>
            <p>Dicoding Space</p>
            <p>
              Jl. Batik Kumeli No.50, Sukaluyu, Kec. Cibeunying Kaler, Kota
              Bandung, Jawa Barat 40123
            </p>
          </div>
          <div class="kabel">
            <h2>Perusahaan</h2>
            <p>Tentang kami</p>
            <p>Kebijakan privasi</p>
            <p>produk</p>
          </div>
          <div class="SGM">
            <h2>Pelayanan pengguna</h2>
            <p>pusat bantuan</p>
            <p>FAQ</p>
            <p>Hubungi kami</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainContent;
