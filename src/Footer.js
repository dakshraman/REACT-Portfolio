import React from 'react';
import './components/styles/styleFooter.css';
import githubImg from './components/images/github-svgrepo-com (1) 1 (2).svg';
import LiImg from './components/images/linkedin-svgrepo-com (1) 1.svg'

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className='footer-container'>
            <ul  className="footer-nav-tabs">
                <li
                    className="navItem">
                    <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li className="navItem">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                <li className="navItem">
                    <a
                        href="#projectpage"
                        onClick={() => handlePageChange('ProjectPage')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'ProjectPage' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                </li>
                <li className="footnavItem">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            <div className='icon-div'>
                <a href='https://github.com/dakshraman'>
                <img alt= 'Github Icon' src={githubImg} />
                </a>
                <a href='https://www.linkedin.com/in/dakshraman/'>
                <img alt= 'Linked-in Icon' src={LiImg} />
                </a>
            </div>
        </div>
    );
}