import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  const slideInLeft = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: 1000 }
  });

  const slideInRight = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: 1000 }
  });

  return (
    <div className="privacy-policy-container">
      <animated.div style={fadeIn} className="privacy-policy-header">
        <h1>Kebijakan Privasi</h1>
        <p>Pelajari lebih lanjut tentang bagaimana kami menjaga privasi Anda.</p>
      </animated.div>
      <div className="privacy-policy-content">
        <animated.div style={slideInLeft} className="privacy-policy-section">
          <h2>Pengumpulan Informasi</h2>
          <p>
            Kami mengumpulkan informasi pribadi Anda untuk memberikan layanan yang lebih baik. Informasi ini termasuk nama, email, dan alamat Anda.
          </p>
        </animated.div>
        <animated.div style={slideInRight} className="privacy-policy-section">
          <h2>Penggunaan Informasi</h2>
          <p>
            Informasi yang kami kumpulkan digunakan untuk memproses pesanan Anda, memberikan layanan pelanggan, dan mengirimkan pembaruan penting tentang produk dan layanan kami.
          </p>
        </animated.div>
        <animated.div style={slideInLeft} className="privacy-policy-section">
          <h2>Perlindungan Informasi</h2>
          <p>
            Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah dan pengungkapan yang tidak sah.
          </p>
        </animated.div>
        <animated.div style={slideInRight} className="privacy-policy-section">
          <h2>Kontak Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, Anda dapat menghubungi kami melalui email di privacy@example.com.
          </p>
        </animated.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
