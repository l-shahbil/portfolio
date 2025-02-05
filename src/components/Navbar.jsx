import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="flex justify-between items-center bg-[#102748] p-6 shadow-md fixed w-full top-0 z-50">
      <h1 className="text-2xl font-bold">Laith Shahbil</h1>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Navigation Links */}
      <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#102748] md:bg-transparent flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <li><a href="#home" className="nav-link" onClick={closeMenu}>Home</a></li>
        <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" className="btn btn-primary" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;