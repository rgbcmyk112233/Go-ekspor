import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import ExportInfo from "./Pages/ExportInfo";
import ExportGuide from "./Pages/ExportGuide";
import Forum from "./Pages/Forum";
import "./App.css";

const NotFound = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
        minHeight: "60vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Halaman yang Anda cari tidak ada.</p>
      <a href="/" className="btn">
        Kembali ke Beranda
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informasi-ekspor" element={<ExportInfo />} />
            <Route path="/panduan-ekspor" element={<ExportGuide />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
