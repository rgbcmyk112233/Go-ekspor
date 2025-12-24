import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src="/vite.svg" alt="Go Ekspor Logo" className="logo-image" />
          <span className="logo-text">Go Ekspor</span>
        </a>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Beranda
          </a>
          <a href="/informasi-ekspor" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Informasi Ekspor
          </a>
          <a href="/panduan-ekspor" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Panduan Ekspor
          </a>
          <a href="/forum" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Forum Diskusi
          </a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
