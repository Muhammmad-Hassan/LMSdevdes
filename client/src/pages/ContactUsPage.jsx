import React, { useState, useRef } from 'react';
import './ContactUs.css';
import { FaFacebookF,FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import Header from '../components/Header';

function ContactUsPage() {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsMessageSent(true);
          formRef.current.reset();
        } else {
          alert('Message failed to send. Please try again.');
        }
      })
      .catch(() => alert('Message failed to send. Please try again.'));
  };

  return (
    <>
   
    <div className="contact-us-page">
      <header className="contact-header">
        <p>We're here to help. Reach out to us anytime!</p>
      </header>

      <main className="contact-main">
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleFormSubmit} className="contact-form" ref={formRef}>
             <input type="hidden" name="access_key" value="6e4c192c-f92f-411f-a8f6-48eb45e30680" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <button type="submit">Send</button>
            {isMessageSent && <p className="message-success">Your message has been sent! We will get back to you soon.</p>}
          </form>
        </section>

        <section className="contact-info-section">
          <h2>Our Contact Information</h2>
          <div className="contact-info">
            <p><strong>Address:</strong> Hayatabad Peshawar</p>
            <p><strong>Email:</strong> fa3n2004@gmail.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Business Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
             <div className="footer-social">
            <a href="https://www.facebook.com/Faizanahmadkhann/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://github.com/Faizan-Ahmad-Khan" aria-label="Twitter"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/faizan-ahmad-khan5/" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/_fa3n__/" aria-label="Instagram"><FaInstagram /></a>
          </div>
          </div>

          <div className="map-container">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.013569611336!2d-122.07851268468126!3d37.39180997983157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb05e86b95ef7%3A0xaed4c6db1d7e282!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630324718880!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
     </>
  );
}

export default ContactUsPage;
