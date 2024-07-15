import React from "react";
import Logo from "../images/logo.jpg";
import Instagram from "../images/Instagram.png";
import Facebook from "../images/facebook.png";
import Gmail from "../images/gmail.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={Logo} alt="Boengkoes Logo" />
            <h2>BOENGKOES</h2>
          </div>
          <div className="footer-location">
            <h3>Lokasi</h3>
            <p>Blcoding Space</p>
            <p>Jl. Batik Kumeli No.50, Sukaluyu,</p>
            <p>Kec. Cibeunying Kaler, Kota Bandung,</p>
            <p>Jawa Barat 40123</p>
          </div>
        </div>
        <div className="footer-company-user">
          <div className="footer-section">
            <h3>Perusahaan</h3>
            <ul>
              <li>
                <a href="/AboutUs">Tentang Kami</a>
              </li>
              <li>
                <a href="/PrivacyPolicy">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="/CardProduk">Produk</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Pelayanan Pengguna</h3>
            <ul>
              <li>
                <a href="/HelpCenter">Pusat Bantuan</a>
              </li>
              <li>
                <a href="/Faq">FAQ</a>
              </li>
              <li>
                <a>Hubungi Kami</a>
              </li>
            </ul>
            <div className="footer-social">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="mailto:support@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Gmail} alt="Gmail" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Boengkoes</p>
      </div>
    </div>
  );
};

export default Footer;
