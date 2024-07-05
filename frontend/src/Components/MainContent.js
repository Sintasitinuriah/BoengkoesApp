import React from "react";
import "../App.css";
import sampleImage from "../images/Group.jpg";
import apimage from "../images/bakso.jpg";
import search from "../images/search.png";
import location from "../images/location.png";
import monetization from "../images/monetization.png";
import batik from "../images/batik.jpg";

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
              <p>
                Temukan produk yang Anda butuhkan dengan cepat dan mudah
                menggunakan fitur "Cari Produk" kami. Dengan berbagai kategori
                dan filter yang komprehensif, Anda dapat mempersempit pencarian
                berdasarkan merek, harga, ulasan pelanggan, dan banyak lagi.
                Baik Anda mencari pakaian, Makanan khas, Oleh-oleh, atau
                kebutuhan sehari-hari, kami menyediakan berbagai pilihan produk
                dari berbagai penjual terpercaya. Jelajahi dan bandingkan produk
                dengan informasi yang lengkap dan jelas untuk membuat keputusan
                belanja yang lebih baik. Mulai pencarian Anda sekarang dan
                nikmati pengalaman berbelanja yang menyenangkan dan efisien
                hanya di platform kami.
              </p>
            </div>
            <div className="kain">
              <img src={location} alt="location" />
              <h3>Isi Alamat Kamu</h3>
              <p>
                Pastikan pesanan Anda sampai dengan tepat waktu dan di tempat
                yang benar dengan mengisi informasi alamat yang akurat. Fitur
                "Isi Alamat Kamu" memungkinkan Anda memasukkan detail alamat
                lengkap termasuk nama jalan, nomor rumah, kode pos, kota, dan
                provinsi. Anda juga dapat menambahkan instruksi khusus untuk
                pengiriman guna memastikan paket Anda diterima dengan baik.
                Dengan menyimpan alamat Anda di akun, proses checkout menjadi
                lebih cepat dan mudah untuk pembelian berikutnya. Isi alamat
                kamu sekarang dan nikmati pengalaman berbelanja yang lebih
                lancar dan nyaman di platform kami.
              </p>
            </div>
            <div className="kain">
              <img src={monetization} alt="gambar" />
              <h3>Konfirmasi pembayaran</h3>
              <p>
                Segera konfirmasikan pembayaran Anda untuk memproses pesanan
                dengan cepat dan tepat. Fitur "Konfirmasi Pembayaran" memudahkan
                Anda dalam menginformasikan bahwa pembayaran telah dilakukan.
                Cukup unggah bukti transfer atau isi detail transaksi seperti
                nomor rekening, jumlah pembayaran, dan tanggal transaksi. Dengan
                konfirmasi yang cepat, pesanan Anda akan segera diproses dan
                dikirimkan. Pastikan semua informasi yang Anda berikan akurat
                untuk menghindari keterlambatan. Nikmati pengalaman belanja yang
                aman dan nyaman dengan sistem konfirmasi pembayaran kami yang
                efisien.
              </p>
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
      </main>
    </div>
  );
}

export default MainContent;
