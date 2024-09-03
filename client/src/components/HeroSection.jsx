import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from "../assets/heroImg.png";
import Header from './Header';

function HeroSection() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/SignIn');
  };

  const handleHowWorks = () => {
    navigate('/SignUp');
  };

  return (
    <>
      <div className="flex flex-col -reverse md:flex-row-reverse justify-between items-center h-screen p-6 md:p-16 bg-gradient-to-br from-white to-cyan-100 text-gray-800">
        <div className="flex-1 md:max-w-[45%] text-left md:text-left ">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-5 leading-snug md:leading-tight transition-colors duration-300 ease-in-out">
            Elevate Your Learning with Our LMS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed">
            Our Learning Management System offers a dynamic dashboard for students and teachers alike. Students can easily access their details, view courses, participate in assignments, and submit complaints. Teachers can assign courses, manage assignments, and respond to student feedback, all in one seamless platform. Simplify the learning experience and empower both educators and students to achieve more.
          </p>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 bg-blue-500 text-white md:text-lg rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform duration-300"
              onClick={handleLogin}
            >
              Student Login
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white md:text-lg rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-transform duration-300"
              onClick={handleHowWorks}
            >
              How it Works
            </button>
          </div>
        </div>
        <div className="flex-1 max-w-[60%] text-center mb-10 md:mb-0">
          <img
            src={heroImg}
            alt="project management Management"
            className="w-[90%] max-w-xs md:max-w-md transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
