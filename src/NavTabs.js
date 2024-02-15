import React from 'react';
import './components/styles/styleNavTabs.css';

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav-nav-tabs">
        <li className="navItem"
          >
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={`nav-link ${currentPage === 'Home' ? 'active' : ''}`}
          >
            Home
          </a>
        </li>
        <li className="navItem">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={`nav-link ${currentPage === 'Resume' ? 'active' : ''}`}
          >
            Resume
          </a>
        </li>
        <li className="navItem">
          <a
            href="#projectpage"
            onClick={() => handlePageChange('ProjectPage')}
            className={`nav-link ${currentPage === 'ProjectPage' ? 'active' : ''}`}
          >
            Projects
          </a>
        </li>
        <li className="navItem">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={`nav-link ${currentPage === 'Contact' ? 'active' : ''}`}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}


