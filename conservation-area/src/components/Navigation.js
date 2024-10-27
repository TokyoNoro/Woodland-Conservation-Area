import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Navigation = ({ toggleDarkMode, dark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`flex items-center justify-between transition-colors duration-300 ${dark ? 'bg-darkBlue' : 'bg-green-800'} text-white h-16 p-4`}>
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-16 mr-2" />
          <span className="text-xl font-semibold">Woodland Conservation Area</span>
        </div>
        <div className="flex items-center">
          <button onClick={toggleDarkMode} className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full text-2xl focus:outline-none mr-4">
            {dark ? <IoSunny className="text-yellow-500" /> : <IoMoon className="text-yellow-500" />}
          </button>
          <button onClick={toggleNav} className="text-white focus:outline-none z-20">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 transition-colors duration-300 ${dark ? 'bg-darkBlue' : 'bg-green-800'} bg-opacity-50 backdrop-blur-md text-white w-64 h-screen p-4 z-10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center mt-16 text-lg">
          <Link to="/" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">Homepage</Link>
          <Link to="/about" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">About</Link>
          <Link to="/sitemap" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">Site Map</Link>
          <Link to="#gallery" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">Gallery</Link>
          <Link to="#ecosystem" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">Ecosystem</Link>
          <Link to="#flora" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">Flora/Fauna/Fungi</Link>
          <Link to="#natural-burial" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">Natural Burial</Link>
          <Link to="#ecommerce" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">eCommerce</Link>
          <Link to="#contact" className="py-2 transition-colors duration-500 ease-in-out hover:bg-yellow-400 w-full text-center rounded-lg hover:rounded-xl">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;

