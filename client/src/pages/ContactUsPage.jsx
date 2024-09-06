import React, { useState, useRef } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

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
    <div className="bg-gradient-to-tl from-[#E5FCFE] to-[#FAFEFE] min-h-screen">
      <header className=" bg-[#d8fafd] shadow-lg   text-center py-8 mt-4">
        <p className="text-lg md:text-xl">We're here to help. Reach out to us anytime!</p>
      </header>

      <main className="container mx-auto py-12 px-4 ">
        <section className=" p-8 shadow-lg rounded-lg border mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
          <form onSubmit={handleFormSubmit} ref={formRef} className="space-y-6">
            <input type="hidden" name="access_key" value="6e4c192c-f92f-411f-a8f6-48eb45e30680" />
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5FCFE]" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5FCFE]" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5FCFE]" required></textarea>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">Send</button>
            {isMessageSent && <p className="text-green-500 mt-4">Your message has been sent! We will get back to you soon.</p>}
          </form>
        </section>

        <section className=" p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Contact Information</h2>
          <div className="text-gray-700 space-y-4 mb-8">
            <p><strong>Address:</strong> Hayatabad Peshawar</p>
            <p><strong>Email:</strong> fa3n2004@gmail.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Business Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM</p>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://www.facebook.com/Faizanahmadkhann/" aria-label="Facebook" className="text-blue-500 hover:text-blue-700"><FaFacebookF size={24} /></a>
            <a href="https://github.com/Faizan-Ahmad-Khan" aria-label="GitHub" className="text-gray-700 hover:text-gray-900"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/faizan-ahmad-khan5/" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={24} /></a>
            <a href="https://www.instagram.com/_fa3n__/" aria-label="Instagram" className="text-pink-500 hover:text-pink-700"><FaInstagram size={24} /></a>
          </div>

          <div className="map-container">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.013569611336!2d-122.07851268468126!3d37.39180997983157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb05e86b95ef7%3A0xaed4c6db1d7e282!2sGoogleplex!5e0!3m2!1sen!2sus!4v1630324718880!5m2!1sen!2sus"
              width="100%"
              height="400"
              className="rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ContactUsPage;
