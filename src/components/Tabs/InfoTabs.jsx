import React, { useState } from "react";
import "./InfoTabs.css";

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Prosedur Ekspor",
      content: {
        items: ["Pendaftaran sebagai Eksportir", "Persiapan Dokumen Ekspor", "Pengurusan Bea Cukai", "Pembayaran Pajak Ekspor", "Pengiriman Barang"],
      },
    },
    {
      title: "Dokumen Required",
      content: {
        items: ["Invoice Commercial", "Packing List", "Bill of Lading", "Certificate of Origin", "Pemberitahuan Ekspor Barang (PEB)"],
      },
    },
    {
      title: "Negara Tujuan",
      content: {
        items: ["ASEAN - Bebas Bea Masuk", "Amerika Serikat - Regulasi FDA", "Uni Eropa - Standar CE Marking", "Timur Tengah - Sertifikasi Halal", "Jepang - Standar JIS"],
      },
    },
  ];

  return (
    <section className="info-tabs">
      <div className="container">
        <h2 className="section-title">Informasi Ekspor Lengkap</h2>

        <div className="tabs-header">
          {tabs.map((tab, index) => (
            <button key={index} className={`tab-btn ${activeTab === index ? "active" : ""}`} onClick={() => setActiveTab(index)}>
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <h3>{tabs[activeTab].title}</h3>
          <ul>
            {tabs[activeTab].content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoTabs;
