import React from "react";
import "../App.css";
import sampleImage from "../images/rendang.png";
import apimage from "../images/bakso.png";
import search from "../images/search.png";
import location from "../images/location.png";
import monetization from "../images/monetization.png";
import batik from "../images/batik.png";
import CardToko from "./CardToko";
import Buttonsmall from "./button-small";

function MainContent() {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="text-content">
          <p>Halo sobat jajan !</p>
          <h1>Temukan Produk Unik di Seluruh Indonesia</h1>
          <h3>
            <span class="highlight">Boengkoes</span> siap bantu kamu buat cari
            produk unik dari setiap daerah Indonesia
          </h3>
          <Buttonsmall></Buttonsmall>
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
          <p>Halo sobat jajan !</p>
          <h1>Temukan Produk Unik di Seluruh Indonesia</h1>
          <h3>
            <span class="highlight">Boengkoes</span> siap mencari produk unik
            dari seluruh wilayah di Indonesia, Lengkap !
          </h3>
          {/* <h3>dari setiap daerah Indonesia</h3> */}
        </div>
      </div>

      <main className="App">
        <section className="Hero">
          <div className="mouse">
            <p>Cari Oleh-Oleh?</p>
            <h1>
              <span class="highlight">Boengkoes</span>in Aja!
            </h1>
            <p>
              Sekarang beli oleh-oleh buat orang yang kamu sayang ! <br />
              Caranya gampang banget kok
            </p>
          </div>
          <div className="karet">
            <div className="kain">
              <img src={search} alt="search" />
              <h3>Cari produk</h3>
              <p>
                Temukan produk dengan cepat dan mudah ! Jelajahi pilihan produk
                dari penjual terpercaya dan nikmati pengalaman belanja terbaik
              </p>
            </div>
            <div className="kain">
              <img src={location} alt="location" />
              <h3>Isi Alamat Kamu</h3>
              <p>
                Isi alamat lengkap untuk pengiriman tepat waktu dan simpan
                produk untuk checkout lebih cepat pada pembelian berikutnya
              </p>
            </div>
            <div className="kain">
              <img src={monetization} alt="gambar" />
              <h3>Konfirmasi pembayaran</h3>
              <p>
                Konfirmasi pembayaran untuk memproses pesanan dengan cepat.
                Pastikan semua informasi yang diberikan sudah akurat
              </p>
            </div>
          </div>
        </section>

        <section className="PopularStores">
          <h2>Toko Paling Populer</h2>
          <div className="container-toko-populer">
            {/* card 1 */}
            <CardToko></CardToko>
            <CardToko></CardToko>
            <CardToko></CardToko>
          </div>
        </section>

        <div className="container-section-6">
          {/* <div className="background-image-pura"> */}
          <div className="content">
            <div className="container-title-batik">
              <p>Buruan Belanja!</p>
              <h1>Cinderamata Lengkap Dan Pastinya Unik !</h1>
            </div>
            <div className="container-gambar-batik">
              <img src={batik} alt="Gambar" />
            </div>
          </div>
          {/* </div> */}
        </div>
      </main>
    </div>
  );
}

export default MainContent;
