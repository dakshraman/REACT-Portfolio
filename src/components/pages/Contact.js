import React, { useState }  from 'react';
import { useRef } from 'react'
import '../styles/contactStyles.css'; // Import your CSS file
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cicitgd', 'template_cou9h7c', form.current, 'FMlJNzxSJ1wG7O9wV')
      .then((result) => {
        setFeedback('Message sent successfully!');
      }, (error) => {
        setFeedback('An error occurred. Please try again later.');
      });
    
    setFormData({
      name: '',
      email: '',
      message: '',
    })

    
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
  };

  return (
    <div>
    <div className='header-container'>
    <h1 className='main-header' > Contact Me</h1>
    </div>
    <div className="contact-container" >
    {feedback && <p className={feedback.includes('error') ? 'error-message' : 'success-message'}>{feedback}</p>}
      <form ref={form} className="contact-form"  onSubmit={sendEmail}>
        <label  htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label  htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button value='Send' className='button' type="submit" >Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;