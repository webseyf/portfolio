import React, { useState } from 'react';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



 
function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  const [activeSection, setActiveSection] = useState('experience');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const sections = [
    {
      key: 'experience',
      title: 'Experience',
      content: `With over 5 years in the industry, I have honed my skills in front-end development, 
                focusing on creating responsive and user-friendly interfaces. My experience includes 
                working with technologies such as React, Angular, and Vue, where I have led projects 
                from concept to deployment.`
    },
    {
      key: 'passion',
      title: 'Passion',
      content: `I am passionate about creating intuitive and engaging web applications that solve 
                real-world problems. My enthusiasm for technology drives me to stay updated with 
                the latest trends and continuously improve my skills.`
    },
    {
      key: 'education',
      title: 'Education',
      content: `I hold a degree in Computer Science, which provided me with a solid foundation 
                in programming principles and software development. Throughout my studies, I 
                specialized in web technologies and completed several projects that reinforced my 
                knowledge in HTML, CSS, JavaScript, and modern frameworks.`
    }
  ];

  return (
    <div className='full'>
      <div className="experience-container" data-aos="zoom-in">
        <div className="button-group">
          {sections.map(section => (
            <button
              key={section.key}
              className={`tab-button ${activeSection === section.key ? 'active' : ''}`}
              onClick={() => handleButtonClick(section.key)}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="content-wrapper">
          <div className="contenti">
            {sections.map(section => (
              <div
                key={section.key}
                className={`contenti-section ${activeSection === section.key ? 'show' : 'hide'}`}
              >
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/rVySNgG_e3Y?si=qdrewX4esLBXlmnq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;