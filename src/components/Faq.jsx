import './Faq.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
once: false   
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What services do you offer as a front-end developer?',
      answer: 'I specialize in creating responsive and user-friendly web applications using technologies like React, HTML, CSS, and JavaScript.',
    },
    {
      question: 'How do you ensure the websites are responsive?',
      answer: 'I use mobile-first design principles, CSS Flexbox and Grid layout to ensure that websites look good on all devices.',
    },
    {
      question: 'What is your experience with JavaScript frameworks?',
      answer: 'I have extensive experience with React and Vue.js, building dynamic single-page applications that enhance user experience.',
    },
    {
      question: 'Can you work with design teams?',
      answer: 'Absolutely! I can collaborate with designers to turn their mockups into functional web applications while ensuring design fidelity.',
    },
  ];

  return (
    <div className="faq-wrapper" data-aos="zoom-out"
 id='faq'>
      <section className="faq-section">
        <div className="faq-background">
          <div className="faq-overlay"></div>
        </div>

        <div className="faq-container" >
          <h2 className="faq-title" >Frequently Asked Questions</h2>

          <div className="faq-accordion"  data-aos="zoom-out">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index} >
                <button
                  className="faq-question"
                  aria-expanded={activeIndex === index}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;