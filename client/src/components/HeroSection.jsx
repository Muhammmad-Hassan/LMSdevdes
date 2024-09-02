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
        <h1>Streamline Your Project Management with Ease</h1>
        <p>Effortlessly manage and track Project with our innovative platform designed to simplify your administrative tasks. Whether you're a student or a teacher, our solution offers a seamless experience to enhance your productivity and keep your records organized.</p>
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
