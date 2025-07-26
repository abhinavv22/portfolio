import React, { useState } from 'react';
import './Myprojects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import project_data from '../../assets/project_Data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Myprojects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleReadMore = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id='myprojects' className='myprojects'>
      <div className="project-title">
        <h1>My projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="projects-container">
        {project_data.map((project, index) => (
          <div key={index} className="project-format">
            <h3>{project.s_no}</h3>
            <h2>{project.s_name}</h2>
            <p>{project.short_desc}</p>

            <div className="project-buttons">
              <div className="project-readmore" onClick={() => handleReadMore(project)}>
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow" />
              </div>

              <a
                href={project.github}
                className="project-github-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>GitHub</p>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedProject.s_name}</h2>
            <p>{selectedProject.full_desc}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myprojects;
