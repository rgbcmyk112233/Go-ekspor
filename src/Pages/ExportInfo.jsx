import React from "react";
import "./ExportInfo.css";

const ExportInfo = () => {
  // Data berita dummy
  const newsArticles = [
    {
      id: 1,
      title: "Peluang Ekspor Kopi Indonesia ke Eropa Meningkat 30%",
      category: "Berita",
      date: "15 Jan 2024",
      excerpt: "Permintaan kopi premium Indonesia di pasar Eropa terus meningkat...",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Regulasi Baru Ekspor Tekstil ke Amerika Serikat 2024",
      category: "Regulasi",
      date: "14 Jan 2024",
      excerpt: "Pemerintah AS menerapkan regulasi baru untuk impor tekstil...",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Panduan Lengkap Ekspor Ikan Tuna ke Jepang",
      category: "Panduan",
      date: "13 Jan 2024",
      excerpt: "Jepang menerima 40% ekspor tuna Indonesia dengan standar khusus...",
      image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: "Incentive Ekspor 2024: Tax Holiday untuk Eksportir Baru",
      category: "Insentif",
      date: "12 Jan 2024",
      excerpt: "Pemerintah memberikan tax holiday selama 3 tahun untuk eksportir baru...",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      title: "Pameran Dagang Internasional di Dubai 2024",
      category: "Event",
      date: "11 Jan 2024",
      excerpt: "Indonesia akan menjadi negara fokus di pameran dagang Dubai...",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      title: "Ekspor Rempah-rempah Tumbuh 25% di Kuartal IV 2023",
      category: "Statistik",
      date: "10 Jan 2024",
      excerpt: "Ekspor rempah-rempah Indonesia menunjukkan pertumbuhan signifikan...",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  // Info penting
  const importantInfo = [
    {
      id: 1,
      title: "Dokumen Wajib Ekspor",
      items: ["Invoice", "Packing List", "Bill of Lading", "Certificate of Origin"],
    },
    {
      id: 2,
      title: "Negara Prioritas Ekspor",
      items: ["Jepang", "Amerika Serikat", "Uni Eropa", "ASEAN"],
    },
    {
      id: 3,
      title: "Bea Keluar Terbaru",
      items: ["CPO: 5%", "Batu Bara: 3%", "Produk Kayu: 2%", "Tekstil: 0%"],
    },
  ];

  return (
    <div className="export-info-page">
      <div className="container">
        {/* Hero Section */}
        <div className="info-hero">
          <h1>Informasi Ekspor Terkini</h1>
          <p>Dapatkan informasi terbaru tentang peluang, regulasi, dan perkembangan ekspor Indonesia</p>
        </div>

        {/* Important Info Cards */}
        <section className="important-section">
          <h2 className="section-title">Informasi Penting</h2>
          <div className="important-cards">
            {importantInfo.map((info) => (
              <div key={info.id} className="important-card">
                <h3>{info.title}</h3>
                <ul>
                  {info.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="section-header">
            <h2 className="section-title">Berita & Update Terbaru</h2>
            <div className="filter-buttons">
              <button className="filter-btn active">Semua</button>
              <button className="filter-btn">Berita</button>
              <button className="filter-btn">Regulasi</button>
              <button className="filter-btn">Event</button>
            </div>
          </div>

          <div className="news-grid">
            {newsArticles.map((article) => (
              <div key={article.id} className="news-card">
                <div className="news-image">
                  <img src={article.image} alt={article.title} />
                  <span className="news-category">{article.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{article.date}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <a href="#" className="read-more">
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="stats-section">
          <h2 className="section-title">Statistik Ekspor Indonesia</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">$291.9B</div>
              <div className="stat-label">Total Ekspor 2023</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">+7.5%</div>
              <div className="stat-label">Pertumbuhan YoY</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">240+</div>
              <div className="stat-label">Negara Tujuan</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15,000+</div>
              <div className="stat-label">Perusahaan Eksportir</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExportInfo;
