import React from 'react';
import '../styles/resumeStyles.css'
import spaceShip from '../images/photo_space.png'
import stellar from '../images/stellar.png'

export default function Resume() {
  return (
    <main>
      <header>
        <h1 className='main-header'>Resume</h1>
      </header>
      <section className='Main-Intro'>
        <div className='Intro-box'>
          <p>
            Dedicated and accomplished Security Officer with a steadfast dedication to maintaining security and promoting public safety. Proficient in executing diverse security responsibilities, including patrolling assigned areas and conducting meticulous investigations. Proven proficiency in conflict resolution and deescalation strategies, actively fostering positive connections with the community. Boasts a history of outstanding service, acknowledged for unwavering professionalism, integrity, and effective leadership. Eager to apply my skills and background to contribute significantly to the ongoing mission of safeguarding and serving the community.
          </p>
        </div>'

        <img className='space-ship' src={spaceShip} />

      </section>
      <header >
        <h2 className='section-header'>
          Experience
        </h2>
      </header>
      <section className='work-experience'>
        <div className='security-work'>
          <header>
            <h3>
              Cyber Security Trainer
            </h3>
          </header>
          <div className='work-description'>
            <p>
              
            </p>
          </div>
        </div>
        <div className='security-work'>
          <header>
            <h3>
              Web Development Trainer
            </h3>
          </header>
          <div className='work-description'>
            <p>
             
            </p>
          </div>
        </div>
      </section>
      <section className='skills'>
        <header >
          <h2 className='section-header'>
            Skills
          </h2>
        </header>
        <ul>
          <li>•Javascript</li><li>•MySQL</li><li>•HMTL & CSS</li><li>•React.Js</li><li>•Flutter & Dart</li><li>•Python</li>
        </ul>
      </section>
      <section>
        <header >
          <h2 className='section-header'>
            Education
          </h2>
        </header>
        <div className='education'>
          <img src={stellar} />
          <div className='education-des'>
            
            <div className='education-subdiv'>
              <h3>Masters in Computer Applications</h3>
            <p> Uttaranchal University, Dehradun, India<br></br>
              2022 - 2024
            </p>
            </div>
            <div className='education-subdiv'>
            <h3>Bachelor in Computer Applications
</h3>
            <p>Kumaun University, Rudrapur, India <br></br>
              2019 - 2022
            </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}