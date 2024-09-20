import './Skill.css';
function Skill() {
  return (
    <div className='row container skills-container' id='skill'>
      <div className="card text-bg-primary mb-3 " style={{ maxWidth: '18rem' }}>
        <div className="card-header">React JS</div>
        <div className="card-body">
          <h5 className="card-title">Component-Based Architecture</h5>
          <p className="card-text">
            Proficient in building scalable, interactive web applications using React’s component-driven approach.
          </p>
        </div>
      </div>

      <div className="card text-bg-secondary mb-3" style={{ maxWidth: '20rem' }}>
        <div className="card-header">JavaScript</div>
        <div className="card-body">
          <h5 className="card-title">Powerful Web Language</h5>
          <p className="card-text">
            Strong foundation in JavaScript, enabling dynamic, feature-rich web experiences across the full stack.
          </p>
        </div>
      </div>

      <div className="card text-bg-success mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">HTML & CSS</div>
        <div className="card-body">
          <h5 className="card-title">Web Structure & Styling</h5>
          <p className="card-text">
            Experienced in crafting responsive and accessible web layouts with semantic HTML and modern CSS techniques.
          </p>
        </div>
      </div>

      <div className="card text-bg-danger mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Bootstrap</div>
        <div className="card-body">
          <h5 className="card-title">Responsive Design Framework</h5>
          <p className="card-text">
            Skilled in using Bootstrap to create mobile-first, adaptive designs that enhance user experience.
          </p>
        </div>
      </div>

      

      <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Version Control (Git)</div>
        <div className="card-body">
          <h5 className="card-title">Collaborative Development</h5>
          <p className="card-text">
            Experienced in using Git for version control, ensuring smooth collaboration and efficient project management.
          </p>
        </div>
      </div>

      <div className="card text-bg-dark mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Problem-Solving</div>
        <div className="card-body">
          <h5 className="card-title">Analytical & Strategic Thinking</h5>
          <p className="card-text">
            Strong problem-solving skills, with a focus on optimizing performance and ensuring code efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
