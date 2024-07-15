import React, { useState, useEffect } from 'react';
import '../HelpCenter.css';

const HelpCenter = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedQuestions = [
    "Bagaimana cara memesan?",
    "Apa metode pembayaran yang tersedia?",
    "Bagaimana cara menghubungi layanan pelanggan?",
    "Berapa lama waktu pengiriman?",
    "Bagaimana cara mengembalikan produk?",
    "Apakah ada diskon untuk pembelian dalam jumlah besar?",
    "Bagaimana cara melacak pesanan saya?",
    "Apakah produk ini memiliki garansi?",
    "Bagaimana cara membatalkan pesanan?"
  ];

  const sendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input, timestamp: new Date() };
      setMessages([...messages, userMessage]);
      setInput('');
      simulateSupportResponse(userMessage);
    }
  };

  const simulateSupportResponse = (userMessage) => {
    setIsTyping(true);
    setTimeout(() => {
      const supportResponses = {
        "Bagaimana cara memesan?": "Untuk memesan, Anda bisa memilih produk dan menambahkannya ke keranjang belanja, lalu mengikuti proses checkout.",
        "Apa metode pembayaran yang tersedia?": "Kami menerima berbagai metode pembayaran termasuk kartu kredit, transfer bank, dan e-wallet.",
        "Bagaimana cara menghubungi layanan pelanggan?": "Anda bisa menghubungi layanan pelanggan kami melalui email di support@example.com atau telepon di 123-456-789.",
        "Berapa lama waktu pengiriman?": "Waktu pengiriman tergantung pada lokasi Anda, biasanya memakan waktu 3-5 hari kerja.",
        "Bagaimana cara mengembalikan produk?": "Untuk mengembalikan produk, silakan ikuti instruksi yang ada pada halaman pengembalian kami atau hubungi layanan pelanggan.",
        "Apakah ada diskon untuk pembelian dalam jumlah besar?": "Ya, kami menawarkan diskon khusus untuk pembelian dalam jumlah besar. Silakan hubungi tim penjualan kami untuk informasi lebih lanjut.",
        "Bagaimana cara melacak pesanan saya?": "Anda bisa melacak pesanan Anda dengan nomor pelacakan yang dikirimkan melalui email setelah pesanan dikirim.",
        "Apakah produk ini memiliki garansi?": "Ya, semua produk kami memiliki garansi 1 tahun. Untuk informasi lebih lanjut, silakan kunjungi halaman garansi kami.",
        "Bagaimana cara membatalkan pesanan?": "Untuk membatalkan pesanan, silakan hubungi layanan pelanggan kami sesegera mungkin dengan nomor pesanan Anda."
      };

      const responseText = supportResponses[userMessage.text] || 'Terima kasih atas pesan Anda. Kami akan segera merespon.';
      const supportMessage = { sender: 'support', text: responseText, timestamp: new Date() };

      setMessages(prevMessages => [...prevMessages, supportMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePredefinedQuestionClick = (question) => {
    setInput(question);
    sendMessage();
  };

  return (
    <div className="help-center">
      <h2>Pusat Bantuan</h2>
      <div className="predefined-questions">
        <h3>Pertanyaan yang Sering Diajukan</h3>
        <ul>
          {predefinedQuestions.map((question, index) => (
            <li key={index} onClick={() => handlePredefinedQuestionClick(question)}>
              {question}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              <p>{msg.text}</p>
              <span className="timestamp">{msg.timestamp.toLocaleTimeString()}</span>
            </div>
          ))}
          {isTyping && <div className="typing-indicator">Support is typing...</div>}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ketik pesan Anda..."
          />
          <button onClick={sendMessage}>Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
