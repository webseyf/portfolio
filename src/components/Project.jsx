
import './Project.css'; // Combined CSS file
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


// ProjectCard Component
function ProjectCard({ image, description, link }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
once: false   
    });
  }, []);
  return (
    <div className="project-card" id='portfolio' data-aos="fade-right">
      <img src={image} alt="Project Preview" className="project-image" />
      <div className="overlay">
        <div className="overlay-content">
          <p>{description}</p>
        </div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="visit-button">
        <FaExternalLinkAlt /> Visit
      </a>
    </div>
  );
}

// Project data
const projects = [
  {
    image: '/photo_26_2024-09-08_14-53-29.jpg',
    description: 'An e-commerce front-end website built with React.js.',
    link: 'https://tafach-seyfadin-abdelas-projects.vercel.app/',
    category: 'upwork'
  },
  {
    image: '/photo_18_2024-09-08_14-53-29.jpg',
    description: 'A real estate web application showcasing listings.',
    link: 'https://real-estate-web-youtube.pages.dev/',
    category: 'portfolio'
  },
  {
    image: '/photo_15_2024-09-08_14-53-29.jpg',
    description: 'A versatile tech stack for modern web applications.',
    link: 'https://greatstack.in/',
    category: 'upwork'
  },
  {
    image: '/photo_20_2024-09-08_14-53-29.jpg',
    description: 'My personal portfolio showcasing various projects.',
    link: 'https://seyfadin42.github.io/portfolio1/',
    category: 'portfolio'
  },
  {
    image: '/photo_2024-09-20_00-47-11.jpg',
    description: 'Different projects I have been working on as a freelancer on Upwork.',
    link: 'https://ex.com/project2',
    category: 'upwork'
  },
  {
    image: '/Capture.PNG',
    description: 'Another project called TechNova as a landing page.',
    link: '/Capture.PNG',
    category: 'upwork'
  },
];

function Portfolio() {
  // State to manage the filtered projects
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Handler function for filtering
  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredProjects(projects); // Show all projects
    } else {
      const filtered = projects.filter(project => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="portfolio-section" data-aos="fade-left">
      <h1 className='project'>Some of my Projects</h1>
      {/* Filter Buttons */}
      <div className="filter-buttons" data-aos="zoom-out">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter('upwork')}>Upwork Jobs</button>
        <button onClick={() => handleFilter('portfolio')}>My Portfolio</button>
      </div>

      {/* Project Cards */}
      <div className="portfolio-container" data-aos="fade-right">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
