import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from "../assets/heroImg.png";
import "./HeroSection.css"
import Header from './Header';



function HeroSection() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/SignIn');
  };

  const handleHowWorks = () => {
    navigate('/SignUp')
  }   

  return (
    <>
    <Header/>
    <div className="hero-section-custom">
      <div className="hero-text-custom">
        <h1>Elevate Your Learning with Our LMS</h1>
        <p>Our Learning Management System offers a dynamic dashboard for students and teachers alike. Students can easily access their details, view courses, participate in assignments, and submit complaints. Teachers can assign courses, manage assignments, and respond to student feedback, all in one seamless platform. Simplify the learning experience and empower both educators and students to achieve more.</p>
        <div className="hero-buttons-custom">
          <button className="btn-teacher-custom" onClick={handleLogin}>Student Login</button>
          <button className="btn-teacher-custom" onClick={handleHowWorks} style={{background:"green"}}>How it Works</button>

        </div>
      </div>
      <div className="hero-image-custom">
        <img src={heroImg} alt="project management Management" />
      </div>
    </div>
     </>
  );
}

export default HeroSection;
