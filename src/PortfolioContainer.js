import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './components/pages/Home';
import ProjectPage from './components/pages/ProjectPage';
import Contact from './components/pages/Contact';
import Resume from  './components/pages/Resume'
import Footer from './Footer'



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'ProjectPage') {
      return <ProjectPage />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className = 'portfolio-container' 
   
>
     <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* We are passing the currentPage from state and the function to update it */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}