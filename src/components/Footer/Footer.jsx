import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Go Ekspor</h3>
            <p>Platform lengkap untuk membantu Anda memulai dan mengembangkan bisnis ekspor ke pasar internasional.</p>
          </div>

          <div className="footer-section">
            <h4>Menu</h4>
            <ul>
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/informasi-ekspor">Informasi Ekspor</Link>
              </li>
              <li>
                <Link to="/panduan-ekspor">Panduan Ekspor</Link>
              </li>
              <li>
                <Link to="/forum">Forum Diskusi</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <ul>
              <li>Email: info@goekspor.com</li>
              <li>Telepon: (021) 1234-5678</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Go Ekspor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
