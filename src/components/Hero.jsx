import { useState, useEffect } from 'react';
import './Hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["SEYFADIN A.", "EXPERT FRONT-END DEVELOPER", "EXPERT IN JS and REACT JS"];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
once: false   
    });
  }, []);
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      // Adjust typing speed for typing and deleting phases
      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        setTypingSpeed(40); // Faster delete speed
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Reset normal speed
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, words]);

  return (
    <div className="hero-container" data-aos="zoom-out">
      <div className="content">
        <h1 className="hero-title">HEY THERE!</h1>
        <div className="typewriter">
          <p className="typewriter-text">
            I am <span className="typewriter-loop">{text}</span>
          </p>
        </div>
      </div>
      <div className="image-container">
        <img src="/full seyf.jpg" alt="Seyf Image" className="animated-image" />
      </div>
    </div>
  );
}

export default Hero;
