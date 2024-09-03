import React, { useState, useRef } from 'react';
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
  const features = [
    { id: 1, text: 'Three Sections for Task Management: To Do, In Progress, Completed' },
    { id: 2, text: 'Drag-and-Drop Functionality for Easy Task Movement' },
    { id: 3, text: 'Task History Tracking for Progress Monitoring' },
    { id: 4, text: 'User Authentication for Secure Access' },
    { id: 5, text: 'Responsive Design for Web and Mobile Use' },
  ];

  
const teamMembers = [
  {
    name: "Faizan Ahmad Khan",
    title: "FrontEnd Developer",
    description: "Designing and implementing the user interface to ensure a seamless and engaging experience for our users.",
    image: team1,
    alt: "Faizan Ahmad Khan"
  },
  {
    name: "Sam Altman",
    title: "CEO, OpenAI",
    description: "Leading the overall vision and strategy, overseeing the integration of advanced technologies to enhance system capabilities.",
    image: team2,
    alt: "Sam Altman"
  },
  {
    name: "Jensen Huang",
    title: "CEO, NVIDIA",
    description: "Providing expertise in cutting-edge hardware solutions to optimize performance and ensure reliable system operations.",
    image: team3,
    alt: "Jensen Huang"
  }
];

  const testimonials = [
  {
    text: "The Countdown Board has revolutionized how we manage projects. It's intuitive and efficient, keeping us on track with deadlines.",
    name: "Jane Doe",
    title: "Project Manager"
  },
  {
    text: "An essential tool for our team. The drag-and-drop functionality makes it easy to update task statuses, and the history tracking is a great feature.",
    name: "John Smith",
    title: "Team Leader"
  },
  {
    text: "Managing multiple projects has never been easier. The Countdown Board helps us stay organized and meet our deadlines consistently.",
    name: "Emily Johnson",
    title: "Developer"
  },
  {
    text: "The simplicity and effectiveness of this tool have made our team's task tracking much more efficient. The Countdown Board is a game-changer!",
    name: "Sarah Lee",
    title: "Designer"
  }
];
  return (
    <>

      <div className="font-sans text-gray-800 leading-relaxed  bg-gradient-to-tl from-[#FAFEFE] to-[#E5FCFE] ">
        {/* Mission Section */}
        <section className="p-10  text-center border-b border-gray-300">
          <h2 className="text-4xl mb-5 font-semibold">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-[35px] max-w-3xl mx-auto">
            Our mission is to provide an innovative solution for managing project tasks efficiently. 
            With the Countdown Board for Project Management, we aim to simplify the process for teams by organizing tasks into clear, manageable sections, enabling them to focus on meeting deadlines and achieving goals. 
            By integrating a user-friendly design with powerful functionality, we strive to enhance productivity and ensure seamless project management.
          </p>
        </section>

        {/* Features Section */}
        <section className="p-10  text-center  border-b border-gray-300 ">
          <h2 className="text-4xl mb-5 font-semibold">Countdown Board Features</h2>
          <ul className="flex flex-wrap justify-center gap-5 my-5 list-none max-w-8xl mx-auto">
          {features.map((feature) => (
          <li
            key={feature.id}
            className="bg-[#E5FCFE] shadow-md rounded-lg border p-4 text-gray-800 w-full sm:w-[40%] text-center transition-transform transform hover:bg-[#ebfbfd] hover:scale-105"
          >
            {feature.text}
          </li>
        ))}
          </ul>
        </section>

        {/* Newsletter Section */}
        <section className="p-10  text-center">
          <h2 className="text-3xl mb-5 font-semibold">Subscribe to Our Newsletter</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto" ref={formRef}>
            <input type="hidden" name="access_key" value="6e4c192c-f92f-411f-a8f6-48eb45e30680" />
            <input type="email" name="email" placeholder="Enter your email" required className="p-2 border border-gray-300 rounded-md w-full sm:max-w-xs" />
            <input type="checkbox" name="botcheck" className="hidden" />
            <button type="submit" className="p-2 bg-gray-800 text-white rounded-md w-full sm:w-2/3 transition-colors hover:bg-gray-900">Subscribe</button>
          </form>
          {isSubscribed && <p className="text-green-600 text-xl mt-4">Thank you for subscribing!</p>}
        </section>

        {/* Team Section */}
        <section className="p-10 bg-white text-center border-b border-gray-300">
  <h2 className="text-4xl mb-5 font-semibold">Meet the Team</h2>
  <div className="flex flex-wrap justify-center gap-10">
    {teamMembers.map((member, index) => (
      <div key={index} className="text-center max-w-xs p-2">
        <img src={member.image} alt={member.alt} className="w-28 h-28 rounded-full shadow-lg mx-auto" />
        <p className="text-lg mt-2 font-bold">{member.name} | {member.title}</p>
        <p className="text-sm text-gray-600 mt-1">{member.description}</p>
      </div>
    ))}
  </div>
</section>

        {/* Testimonials Section */}
        <section className="p-10 b text-center">
  <h2 className="text-3xl mb-5 font-semibold">What Our Users Say</h2>
  <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="bg-white border border-gray-300 rounded-lg p-5 max-w-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <p className="text-gray-800 mb-3">{testimonial.text}</p>
        <span className="block text-green-700 font-bold">{testimonial.name}</span>
        <span className="block text-green-600 text-sm">{testimonial.title}</span>
      </div>
    ))}
  </div>
</section>
      </div>
    </>
  );
}

export default AboutPage;
