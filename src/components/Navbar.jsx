
import './Navbar.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
once: false   
    });
  }, []);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="container" data-aos="zoom-out">
      <header className="navbar navbar-expand-md py-2 mb-3 custom-bg-color ">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            className="bi me-2 rounded-circle"
            width="40"
            height="42"
            src="/face seyf.jpg"
            alt="Profile"
          />
          <span className="fs-4 mr">
            Mr.<span className="seyfadin">Seyfadin</span>
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse ${
            isNavCollapsed ? 'collapse' : 'collapse show animate-slide'
          }`}
        >
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#skill" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
