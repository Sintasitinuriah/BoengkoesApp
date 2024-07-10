import React, { useState } from 'react';
import '../FAQ.css';

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'Bagaimana cara memesan?',
      answer: 'Untuk memesan, pertama pilih barang yang ingin Anda beli dan tambahkan ke keranjang Anda. Kemudian, lanjutkan ke pembayaran di mana Anda dapat memasukkan informasi pengiriman dan pembayaran Anda.',
      open: false
    },
    {
      question: 'Metode pembayaran apa saja yang diterima?',
      answer: 'Kami menerima berbagai metode pembayaran termasuk kartu kredit/debit, Dana, Gopay, dan transfer bank.',
      open: false
    },
    {
      question: 'Bagaimana cara melacak pesanan saya?',
      answer: 'Setelah pesanan Anda dikirim, Anda akan menerima email dengan informasi pelacakan. Anda dapat menggunakan informasi ini untuk melacak pesanan Anda melalui situs web kurir.',
      open: false
    },
    {
      question: 'Apa kebijakan pengembalian Anda?',
      answer: 'Kebijakan pengembalian kami memungkinkan Anda mengembalikan barang dalam waktu 30 hari setelah pembelian untuk pengembalian dana penuh. Barang harus dalam kondisi asli.',
      open: false
    },
    {
      question: 'Bagaimana cara menghubungi dukungan pelanggan?',
      answer: 'Anda dapat menghubungi dukungan pelanggan kami melalui email di support@example.com atau menelepon kami di 123-456-7890.',
      open: false
    },
    {
      question: 'Bisakah saya mengubah pesanan saya setelah melakukan pemesanan?',
      answer: 'Ya, Anda dapat mengubah pesanan Anda dalam waktu 24 jam setelah melakukan pemesanan. Silakan hubungi dukungan pelanggan kami untuk membuat perubahan.',
      open: false
    },
    {
      question: 'Apakah Anda mengirim secara internasional?',
      answer: 'Ya, kami mengirim ke sebagian besar negara di seluruh dunia. Biaya pengiriman dan waktu pengiriman bervariasi tergantung pada tujuan.',
      open: false
    },
    {
      question: 'Bagaimana cara mereset kata sandi saya?',
      answer: 'Untuk mereset kata sandi Anda, buka halaman login dan klik "Lupa Kata Sandi". Ikuti petunjuk untuk mereset kata sandi Anda.',
      open: false
    },
    {
      question: 'Bagaimana cara berlangganan newsletter Anda?',
      answer: 'Anda dapat berlangganan newsletter kami dengan memasukkan alamat email Anda di bagian bawah halaman utama kami dan mengklik "Berlangganan".',
      open: false
    },
    {
      question: 'Apa yang harus saya lakukan jika menerima barang yang rusak?',
      answer: 'Jika Anda menerima barang yang rusak, silakan hubungi dukungan pelanggan kami segera dengan foto barang yang rusak. Kami akan mengatur penggantian atau pengembalian dana untuk Anda.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <div className="faq-page">
      <h1>Pertanyaan yang Sering Diajukan</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <div key={i} className="faq">
            <div className="question" onClick={() => toggleFAQ(i)}>
              <h3>{faq.question}</h3>
              <span>{faq.open ? '-' : '+'}</span>
            </div>
            {faq.open && <div className="answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
