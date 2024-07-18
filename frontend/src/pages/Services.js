import React from "react";
import "../Services.css";
import ServiceCard from "../Components/ServiceCard";

const services = [
  {
    title: "Konsultasi Penjualan",
    description:
      "Layanan ini bertujuan untuk membantu bisnis Anda dalam mengembangkan strategi penjualan yang efektif dan efisien. Melalui analisis mendalam terhadap pasar, produk, dan pelanggan, kami memberikan saran yang disesuaikan untuk meningkatkan kinerja penjualan. Konsultan kami yang berpengalaman akan bekerja sama dengan tim Anda untuk mengidentifikasi peluang penjualan baru, mengatasi hambatan penjualan, dan mengoptimalkan proses penjualan yang ada. Dengan pendekatan yang terstruktur dan berbasis data, layanan Konsultasi Penjualan kami dirancang untuk mendorong pertumbuhan bisnis yang berkelanjutan..",
  },
  {
    title: "Pelatihan Penjualan",
    description:
      "Layanan ini dirancang untuk meningkatkan keterampilan dan kompetensi tim penjualan Anda. Melalui program pelatihan yang komprehensif, kami fokus pada pengembangan teknik penjualan, kemampuan komunikasi, dan strategi negosiasi yang efektif. Pelatihan ini mencakup berbagai aspek penting seperti memahami kebutuhan pelanggan, membangun hubungan yang kuat, serta teknik closing yang sukses. Dengan metode pelatihan interaktif dan studi kasus nyata, kami memastikan tim penjualan Anda siap menghadapi tantangan pasar dan mencapai target penjualan yang lebih tinggi..",
  },
  {
    title: "Layanan Dukungan Pelanggan",
    description: "Layanan ini menyediakan bantuan yang komprehensif kepada pelanggan Anda, memastikan mereka mendapatkan solusi cepat dan efektif untuk setiap pertanyaan atau masalah yang dihadapi. Kami menawarkan dukungan melalui berbagai saluran, termasuk telepon, email, dan live chat, untuk menjamin kenyamanan dan kepuasan pelanggan. Tim dukungan kami yang terlatih siap membantu menangani keluhan, memberikan informasi produk, serta panduan penggunaan secara profesional dan ramah. Dengan fokus pada respons cepat dan penyelesaian yang tepat, layanan dukungan pelanggan kami bertujuan untuk membangun hubungan jangka panjang dan meningkatkan loyalitas pelanggan..",
  },
  // Tambahkan layanan lainnya di sini
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Layanan Kami</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
