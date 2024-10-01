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
        <h1 className='cent'>About Me</h1>
      <div className="about-content">
      
        <div className="about-image-wrapper">
          <img src="/photo_2024-09-19_18-18-55.jpg" className="about-image" alt="Description" />
          <div className="overlay">
            <div className="overlay-text">Let&apos;s Connect<br />
            I am always excited about new opportunities and challenges. If you’re interested in collaborating on a project or if you’d like to discuss how I can contribute to your team, feel free to get in touch!</div>
          </div>
        </div>
        <div className="about-text">
        
          <p className="lead">
          As a passionate Front-End Developer with  years of experience, I specialize in creating visually stunning and highly functional user interfaces that enhance the user experience. My expertise lies in transforming design concepts into seamless and responsive web applications using modern technologies and best practices.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">


</div>
          </div>
        </div>
      </div>

  );
}

export default About;
