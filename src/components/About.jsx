import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="about-container" id='about' data-aos="zoom-out">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src="/photo_2024-09-19_18-18-55.jpg" className="about-image" alt="Description" />
          <div className="overlay">
            <div className="overlay-text">Let&apos;s Connect<br />
            I am always excited about new opportunities and challenges. If you’re interested in collaborating on a project or if you’d like to discuss how I can contribute to your team, feel free to get in touch!</div>
          </div>
        </div>
        <div className="about-text">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 about-me">About Me</h1>
          <p className="lead">
          As a passionate Front-End Developer with  years of experience, I specialize in creating visually stunning and highly functional user interfaces that enhance the user experience. My expertise lies in transforming design concepts into seamless and responsive web applications using modern technologies and best practices.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">



          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Learn more
        </button>
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        
        
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">More About Me</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    
Hi, I am Seyfadin A., <br /> <br /> An experienced Front-End Developer with a passion for crafting seamless, responsive, and dynamic user interfaces. With a solid background in JavaScript, React, and modern web technologies like react, I transform ideas into engaging digital experiences. <br /><br /> I SPECIALIZE IN:

Responsive Design: Creating mobile-first, cross-browser compatible websites that look great on any device. <br />
JavaScript Mastery: Leveraging the power of ES6+ and React to build interactive and high-performance applications. <br />
CSS and Design: Utilizing CSS3, Sass, Bootstrap, and Tailwind to deliver visually appealing layouts with a keen eye for detail. <br /><br />
I thrive in collaborative environments where I can solve complex problems and continuously improve my craft. My goal is to create digital experiences that not only meet functional requirements but also delight users with intuitive, aesthetically pleasing designs. 
      </div>
     
    </div>
  </div>
</div>
          </div>


            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
