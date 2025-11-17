import React, { useState } from "react";
import "./ForumSection.css";

const ForumSection = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Cara ekspor kerajinan tangan ke Eropa",
      author: "Budi Santoso",
      date: "2024-01-15",
      replies: 12,
      category: "Eropa",
    },
    {
      id: 2,
      title: "Pengalaman ekspor pertama ke Singapura",
      author: "Sari Dewi",
      date: "2024-01-14",
      replies: 8,
      category: "ASEAN",
    },
    {
      id: 3,
      title: "Kendala dokumen ekspor makanan",
      author: "Ahmad Fauzi",
      date: "2024-01-13",
      replies: 15,
      category: "Dokumen",
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      title: newPost.title,
      author: "Pengguna Baru",
      date: new Date().toISOString().split("T")[0],
      replies: 0,
      category: newPost.category,
    };
    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "", category: "" });
  };

  return (
    <section className="forum-section">
      <div className="container">
        <h2 className="section-title">Forum Diskusi Eksportir</h2>

        <div className="forum-container">
          <div className="forum-posts">
            <h3>Diskusi Terbaru</h3>
            {posts.map((post) => (
              <div key={post.id} className="forum-post">
                <div className="post-main">
                  <h4>{post.title}</h4>
                  <div className="post-meta">
                    <span>Oleh: {post.author}</span>
                    <span>{post.date}</span>
                    <span className="category">{post.category}</span>
                  </div>
                </div>
                <div className="post-replies">
                  <span>{post.replies} balasan</span>
                </div>
              </div>
            ))}
          </div>

          <div className="new-post">
            <h3>Buat Diskusi Baru</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Judul diskusi" value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} required />
              <select value={newPost.category} onChange={(e) => setNewPost({ ...newPost, category: e.target.value })} required>
                <option value="">Pilih Kategori</option>
                <option value="Dokumen">Dokumen</option>
                <option value="ASEAN">ASEAN</option>
                <option value="Eropa">Eropa</option>
                <option value="Amerika">Amerika</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              <textarea placeholder="Isi diskusi..." value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} rows="4" required></textarea>
              <button type="submit" className="btn">
                Posting Diskusi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
