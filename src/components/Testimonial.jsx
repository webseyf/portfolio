import './Testimonial.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Testimonial() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
once: false   
    });
  }, []);
  return (
    <div className="testimonial-container" data-aos="zoom-out">
      <h1 className='test'>Testimonials On My Services</h1>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" aria-live="polite" data-aos="zoom-out">
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#testimonialCarousel" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true" 
            aria-label="Testimonial 1">
          </button>
          <button 
            type="button" 
            data-bs-target="#testimonialCarousel" 
            data-bs-slide-to="1" 
            aria-label="Testimonial 2">
          </button>
          <button 
            type="button" 
            data-bs-target="#testimonialCarousel" 
            data-bs-slide-to="2" 
            aria-label="Testimonial 3">
          </button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="public/9k=.jpg" className="d-block w-100 h-90" alt="John Doe's Testimonial"/>
            <div className="carousel-caption">
              <h5>John Doe</h5>
              <p>Seyfadin service transformed my business. Highly recommend!</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src="public/Z (1).jpg" className="d-block w-100" alt="Jane Smith's Testimonial"/>
            <div className="carousel-caption">
              <h5>Jane Smith</h5>
              <p>Seyfadin has exceptional quality and support. I could not be happier.</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src="public/Z.jpg" className="d-block w-100" alt="Emily Johnson's Testimonial"/>
            <div className="carousel-caption">
              <h5>Emily Johnson</h5>
              <p>Seyfadin is professional and efficient. He exceeded my expectations.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonial;