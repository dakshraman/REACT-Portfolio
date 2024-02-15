import React, { useState } from 'react';
import Selfie from '../images/me.png'
import Earth from '../images/Vector.png'
import CodePic from '../images/coding_picture.png'
import fourthDimension from '../images/interstellar_picture.png'
import '../styles/styleHome.css'


export default function Home() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div >
      <section className='top-container'>
        <div className='name-and-webdev-box'>
          <div className='web-developer-container'>
            <h2 className='web-developer'>web developer</h2>
          </div>
          <div className='name-container'>

            <h1 className='name'>
              Raman<br></br>Daksh
            </h1>

          </div>
        </div>
        <div className='selfie-container'>
          <img className='selfie'
            src={Selfie}
          />
        </div>
      </section>
      <div className='welcome-container'>
        <h2 className='welcome'>
          Welcome to my portfolio website! I'm really thrilled to have you here.
        </h2>
      </div>
      {screenWidth >= 500 ? (
        <section className='about'>

          <div className='earth-box'>
            <img className='earth'
              src={Earth} />
          </div>
          <div className='coding-about-container'>
            <div className='introduction-container'>
              <p className='introduction' >I am a passionate web developer based in the beautiful city of India. With a strong background in coding and a keen eye for design, I specialize in creating stunning and functional websites that leave a lasting impression.</p>
            </div>
            <img className='coding-pic'
              src={CodePic}
            />
          </div>
        </section>) :
        <section className='about'>

          <div className='earth-box'>
            <img className='earth'
              src={Earth} />
            <p className='introduction' >I am an enthusiastic web developer located in the vibrant city of India. Armed with a robust coding foundation and a discerning design sensibility, my expertise lies in crafting captivating and highly functional websites that not only captivate but also endure in the minds of users.</p>
          </div>
          <img className='coding-pic'
            src={CodePic}
          />
        </section>
      }
      <section className='bottom-container'  >
        <div className='fourth-demension-container'>
        <img
          className='fourth-demension'
          src={fourthDimension} />
          </div>
        <div className='my-work-container'>
          <p className='my-work' >

          As you dive into my portfolio, you'll notice a showcase of my most recent projects, each exemplifying my unmatched dedication to producing top-tier websites. These creations not only boast visually appealing aesthetics but also prioritize delivering an exceptional user experience. Whether it's implementing responsive designs or ensuring seamless navigation, my goal is to craft websites that not only captivate but actively engage visitors.
            <br></br>
            <br></br>
            Collaboration is at the heart of my work. I believe in building strong relationships with my clients, understanding their vision, and translating it into a digital reality. I am always excited to take on new challenges and bring fresh ideas to the table, ensuring that each project is a true reflection of my client's brand and objectives.
            <br></br><br></br>
            Whether you are a business owner looking to establish an online presence or an individual seeking a personal website, I am here to help you bring your ideas to life. I am dedicated to providing top-notch web development services that exceed your expectations and drive results.
            <br></br><br></br>
            Thank you for visiting my portfolio website. I invite you to explore my work and get in touch with me to discuss how we can collaborate on your next project. Let's create something amazing together!
          </p>
        </div>
      </section>
      <div className='footer'>

      </div>
    </div>
  );
}
