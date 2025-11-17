import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Jelajahi Peluang Ekspor dengan <span>Go Ekspor</span>
        </h1>
        <p className="hero-description">Platform lengkap untuk membantu Anda memulai dan mengembangkan bisnis ekspor. Dapatkan informasi terkini, panduan praktis, dan bergabung dengan komunitas eksportir.</p>
        <div className="hero-buttons">
          <Link to="/informasi-ekspor" className="btn btn-primary">
            Mulai Ekspor
          </Link>
          <Link to="/forum" className="btn btn-secondary">
            Gabung Forum
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ekspor Internasional" />
      </div>
    </section>
  );
};

export default HeroSection;
