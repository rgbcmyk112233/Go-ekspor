import React, { useState, useRef, useEffect } from "react";
import "./ExportGuide.css";

const ExportGuide = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Halo! Saya Asisten AI Go Ekspor. Saya bisa membantu Anda dengan pertanyaan seputar ekspor. Apa yang ingin Anda tanyakan?",
      sender: "ai",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Predefined questions
  const quickQuestions = ["Dokumen ekspor apa saja?", "Cara dapat izin ekspor?", "Lama proses ekspor?", "Negara tujuan terbaik?"];

  // Common responses
  const aiResponses = {
    dokumen: "Dokumen ekspor yang diperlukan:\n• Invoice Commercial\n• Packing List\n• Bill of Lading\n• Certificate of Origin\n• PEB (Pemberitahuan Ekspor Barang)",
    izin: "Langkah dapat izin ekspor:\n1. Daftar eksportir di Kemendag\n2. Dapatkan NIB\n3. Ajukan API jika perlu\n4. Sertifikasi produk",
    proses: "Proses ekspor 2-4 minggu:\n• Persiapan dokumen: 3-5 hari\n• Bea cukai: 1-3 hari\n• Pengiriman: 14-30 hari\n• Kliring: 3-7 hari",
    negara: "Negara tujuan ekspor:\n• Jepang: makanan & kayu\n• AS: tekstil & furniture\n• UE: minyak sawit & karet\n• ASEAN: semua produk",
  };

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMsg = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const lowerMessage = inputMessage.toLowerCase();
      let response = "Untuk pertanyaan tersebut:\n\n";

      if (lowerMessage.includes("dokumen")) {
        response = aiResponses.dokumen;
      } else if (lowerMessage.includes("izin")) {
        response = aiResponses.izin;
      } else if (lowerMessage.includes("proses") || lowerMessage.includes("lama")) {
        response = aiResponses.proses;
      } else if (lowerMessage.includes("negara")) {
        response = aiResponses.negara;
      } else {
        response = "Saya sarankan:\n1. Konsultasi dengan dinas perdagangan\n2. Ikuti pelatihan online\n3. Bergabung forum eksportir";
      }

      const aiMsg = {
        id: messages.length + 2,
        text: response,
        sender: "ai",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    setTimeout(() => {
      const form = document.querySelector(".chat-input-form");
      if (form) form.requestSubmit();
    }, 100);
  };

  // Step by step guide
  const exportSteps = [
    { step: 1, title: "Persiapan", desc: "Produk & pasar", icon: "📋" },
    { step: 2, title: "Legalitas", desc: "NIB & sertifikasi", icon: "⚖️" },
    { step: 3, title: "Dokumen", desc: "Invoice & packing list", icon: "📄" },
    { step: 4, title: "Pengiriman", desc: "Transportasi & bea", icon: "🚢" },
    { step: 5, title: "Pembayaran", desc: "Metode & asuransi", icon: "💰" },
  ];

  return (
    <div className="export-guide-page">
      <div className="container">
        {/* Hero Section */}
        <div className="guide-hero">
          <h1>Panduan Ekspor Lengkap</h1>
          <p>Dapatkan panduan step-by-step dan konsultasi dengan AI Assistant</p>
        </div>

        <div className="guide-layout">
          {/* Left Column - Step Guide */}
          <div className="guide-sidebar">
            <div className="steps-card">
              <h2 className="section-title">Langkah Ekspor</h2>
              <div className="steps-list">
                {exportSteps.map((item) => (
                  <div key={item.step} className="step-item">
                    <div className="step-icon">{item.icon}</div>
                    <div className="step-info">
                      <div className="step-header">
                        <span className="step-number">0{item.step}</span>
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Card */}
            <div className="resources-card">
              <h3>Resources</h3>
              <div className="resources-list">
                <a href="#" className="resource-item">
                  <span className="resource-icon">📘</span>
                  <div>
                    <h4>Template Dokumen</h4>
                    <p>Download template</p>
                  </div>
                </a>
                <a href="#" className="resource-item">
                  <span className="resource-icon">🎥</span>
                  <div>
                    <h4>Video Tutorial</h4>
                    <p>Panduan visual</p>
                  </div>
                </a>
                <a href="#" className="resource-item">
                  <span className="resource-icon">📞</span>
                  <div>
                    <h4>Hotline</h4>
                    <p>Konsultasi expert</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Chatbot */}
          <div className="guide-main">
            <div className="chatbot-card">
              <div className="chatbot-header">
                <div className="chatbot-info">
                  <div className="ai-avatar">AI</div>
                  <div>
                    <h3>Asisten AI Go Ekspor</h3>
                    <p className="chatbot-status">Online • Siap membantu</p>
                  </div>
                </div>
                <button className="new-chat-btn" onClick={() => setMessages([messages[0]])}>
                  Chat Baru
                </button>
              </div>

              {/* Chat Messages */}
              <div className="chat-messages">
                {messages.map((msg) => (
                  <div key={msg.id} className={`message-bubble ${msg.sender}-bubble`}>
                    <div className="bubble-content">
                      {msg.text.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <span className="message-time">{msg.time}</span>
                  </div>
                ))}

                {isTyping && (
                  <div className="message-bubble ai-bubble">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <p>Pertanyaan cepat:</p>
                <div className="quick-buttons">
                  {quickQuestions.map((q, i) => (
                    <button key={i} className="quick-btn" onClick={() => handleQuickQuestion(q)}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <form onSubmit={handleSendMessage} className="chat-input-area">
                <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Tanyakan tentang ekspor..." className="chat-input" autoFocus />
                <button type="submit" className="send-btn" disabled={!inputMessage.trim()}>
                  Kirim
                </button>
              </form>

              {/* Disclaimer */}
              <div className="chatbot-disclaimer">
                <p>⚠️ Informasi adalah panduan umum. Konsultasi dengan profesional untuk keputusan bisnis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportGuide;
