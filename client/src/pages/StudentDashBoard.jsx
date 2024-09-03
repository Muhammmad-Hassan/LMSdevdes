import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import devDudes from "../assets/devdudes.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/">
            <img src={devDudes} alt="Logo" className="h-14" />
          </Link>
        </div>
        <div className="block lg:hidden" onClick={toggleMenu}>
          <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
        </div>
        <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 font-semibold hover:text-blue-500">HOME</Link></li>
            <li><Link to="/about" className="text-gray-600 font-semibold hover:text-blue-500">ABOUT</Link></li>
            <li><Link to="/contact" className="text-gray-600 font-semibold hover:text-blue-500">CONTACT</Link></li>
            <li><Link to="/dashboard" className="text-gray-600 font-semibold hover:text-blue-500">DASHBOARD</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
