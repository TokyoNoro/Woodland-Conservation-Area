import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-green-800 text-white h-16 p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-semibold">Conservation Area</span>
        </div>
        <button onClick={toggleNav} className="text-white focus:outline-none mr-2 z-20">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 bg-green-800 bg-opacity-50 backdrop-blur-md text-white w-64 h-screen p-4 z-10">
          <nav className="flex flex-col mt-16">
            <a href="#home" className="py-2 hover:bg-green-600">Homepage</a>
            <a href="#about" className="py-2 hover:bg-green-600">About</a>
            <a href="#gallery" className="py-2 hover:bg-green-600">Gallery</a>
            <a href="#ecosystem" className="py-2 hover:bg-green-600">Ecosystem</a>
            <a href="#contact" className="py-2 hover:bg-green-600">Contact</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;
