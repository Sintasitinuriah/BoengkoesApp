import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../AboutUs.css';

const AboutUs = () => {
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
    <div className="about-us-container">
      <animated.div style={fadeIn} className="about-us-header">
        <h1>Tentang Kami</h1>
        <p>Kenali lebih dekat tim dan visi kami.</p>
      </animated.div>
      <div className="about-us-content">
        <animated.div style={slideInLeft} className="about-us-section">
          <h2>Visi Kami</h2>
          <p>
            Kami berkomitmen untuk memberikan produk terbaik dan layanan yang unggul untuk semua pelanggan kami.
          </p>
        </animated.div>
        <animated.div style={slideInRight} className="about-us-section">
          <h2>Tim Kami</h2>
          <p>
            Kami terdiri dari profesional yang berdedikasi untuk memberikan pengalaman terbaik kepada Anda.
          </p>
        </animated.div>
      </div>
      <animated.div style={fadeIn} className="about-us-footer">
        <h3>Ikuti Kami</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </animated.div>
    </div>
  );
};

export default AboutUs;
