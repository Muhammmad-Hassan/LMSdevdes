import React, { useState, useRef } from 'react';
import './AboutPage.css';
import team1 from "../assets/faizanAhmad.png";
import team2 from "../assets/SamAltman.png";
import team3 from "../assets/JensenHuang.png";
import Header from '../components/Header';

function AboutPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const formRef = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const emailInput = formRef.current.querySelector('input[type="email"]');
    if (!emailInput.checkValidity()) {
      alert('Please enter a valid email address.');
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsSubscribed(true);
          form.reset();
        } else {
          alert('Subscription failed. Please try again.');
        }
      })
      .catch(() => alert('Subscription failed. Please try again.'));
  };

  return (
    <>
     <Header/>
    
    <div className="about-page-container">
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to provide an innovative solution for managing project tasks efficiently. With the Countdown Board for Project Management, we aim to simplify the process for teams by organizing tasks into clear, manageable sections, enabling them to focus on meeting deadlines and achieving goals. By integrating a user-friendly design with powerful functionality, we strive to enhance productivity and ensure seamless project management.</p>
      </section>

      <section className="about-section">
        <h2>Countdown Board Features</h2>
        <div className="features-container">
          <ul className="features-list">
            <li>Three Sections for Task Management: To Do, In Progress, Completed</li>
            <li>Drag-and-Drop Functionality for Easy Task Movement</li>
            <li>Task History Tracking for Progress Monitoring</li>
            <li>User Authentication for Secure Access</li>
            <li>Responsive Design for Web and Mobile Use</li>
          </ul>
        </div>
      </section>

      <section className="about-section subscribe-section">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleFormSubmit} className="subscribe-form" ref={formRef}>
          <input type="hidden" name="access_key" value="6e4c192c-f92f-411f-a8f6-48eb45e30680" />
          <input type="email" name="email" placeholder="Enter your email" required />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <button type="submit">Subscribe</button>
        </form>

        {isSubscribed && <p className="subscribe-success">Thank you for subscribing!</p>}
      </section>

      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div>
            <img src={team1} alt="Faizan Ahmad Khan" />
            <p><b></b>Faizan Ahmad Khan | FrontEnd Developer</p>
            <p>Responsible for designing and implementing the user interface to ensure a seamless and engaging experience for our users.</p>
          </div>
          <div>
            <img src={team2} alt="Sam Altman" />
            <p>Sam Altman | CEO, OpenAI</p>
            <p>Leading the overall vision and strategy, overseeing the integration of advanced technologies to enhance system capabilities.</p>
          </div>
          <div>
            <img src={team3} alt="Jensen Huang" />
            <p>Jensen Huang | CEO, NVIDIA</p>
            <p>Providing expertise in cutting-edge hardware solutions to optimize performance and ensure reliable system operations.</p>
          </div>
        </div>
      </section>

      <section className="about-section testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>"The Countdown Board has revolutionized how we manage projects. It's intuitive and efficient, keeping us on track with deadlines."</p>
            <span className="author">Jane Doe</span>
            <span className="position">Project Manager</span>
          </div>
          <div className="testimonial-card">
            <p>"An essential tool for our team. The drag-and-drop functionality makes it easy to update task statuses, and the history tracking is a great feature."</p>
            <span className="author">John Smith</span>
            <span className="position">Team Leader</span>
          </div>
          <div className="testimonial-card">
            <p>"Managing multiple projects has never been easier. The Countdown Board helps us stay organized and meet our deadlines consistently."</p>
            <span className="author">Emily Johnson</span>
            <span className="position">Developer</span>
          </div>
          <div className="testimonial-card">
            <p>"The real-time updates and responsive design make this tool indispensable for our workflow. Highly recommended!"</p>
            <span className="author">Michael Brown</span>
            <span className="position">Product Owner</span>
          </div>
          <div className="testimonial-card">
            <p>"A fantastic project management tool that has greatly improved our team's efficiency. The user-friendly interface is a major plus."</p>
            <span className="author">Lisa White</span>
            <span className="position">Scrum Master</span>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 Countdown Board. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}

export default AboutPage;
