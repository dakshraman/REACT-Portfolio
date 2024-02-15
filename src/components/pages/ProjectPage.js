// ProjectPage.js

import React, { useState } from 'react';
import '../styles/styleProjectPage.css';
import ProjectInfo from '../pages/projectData.js';
import PasswordGen from '../images/projectImages/webdev.jpg';
import EmployeeTrack from '../images/projectImages/messager.png';

const projects = [PasswordGen, EmployeeTrack];

export default function ProjectPage() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseOver = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseOut = () => {
    setHoveredProject(null);
  };

  return (
    <div className='Main-container'>
      <div className='Header-container'>
        <h1 className='mainHeader'>Projects</h1>
      </div>

      <div className='project-container'>
        {ProjectInfo.map((project) => (
          <div
            key={project.id}
            className='project-div'
            onMouseEnter={() => handleMouseOver(project.id)} // Mouseover event targets individual div
            onMouseLeave={handleMouseOut}
          >
            <a href={project.githubLink} className='project-link'>
              <div className='project-image-container'>
                <img alt={project.alt} className={`project-image ${hoveredProject === project.id ? 'blurred' : ''}`} src={projects[project.id]} />
              </div>
              {hoveredProject === project.id && (
                <div className='project-info'>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                 {/* { <p>Languages: {project.languages.join(', ')}</p>} */}
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}





