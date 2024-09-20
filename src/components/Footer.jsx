import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 600, // animation duration
      offset: 120, // triggers animation earlier or later in the viewport
    });
    AOS.refresh();
  }, []);

  return (
    <footer className="footer-section" data-aos="fade-up" id="contact">
      <div className="footer-background">
        <div className="footer-overlay"></div>
      </div>
      <div className="footer-container" data-aos="fade-up">
        <div className="footer-content">
        
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaGithub /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaEnvelope /></a>
            </div>
          </div>
          <div className="footer-newsletter">
            <h3>Newsletter Signup</h3>
            <form className="newsletter-form" action="https://formspree.io/f/movazbkl" method="post">
              <input type="email" placeholder="Enter your email" required name="email" /><br />
              <textarea placeholder='Write here if you have any message' required name="message"></textarea><br />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Developed by Seyfadin A.</p>
          <p>&copy; 2024 Technova Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;