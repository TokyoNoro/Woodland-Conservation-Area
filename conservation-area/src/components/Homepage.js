//Author: Marko Ostrovitsa (A00448932)
//Purpose: The purpose of this file is to display the homepage of the website

import React from 'react'; 
import dayBackground from '../assets/forest1.png'; // Import the daytime background image
import nightBackground from '../assets/nightforest.png'; // Import the nighttime background image

// Homepage component definition
const Homepage = ({ dark }) => {
  return (
    // Main container for the homepage
    <div
      className={`flex items-center justify-center min-h-screen bg-cover bg-center transition-all duration-500`}
      style={{ backgroundImage: `url(${dark ? nightBackground : dayBackground})` }} // Dynamically set background image based on dark mode
    >
      <div className="text-center text-white"> 
        <h1 className="text-8xl font-light mb-4">Welcome to Woodland Conservation Area</h1> 
        <p className="text-4xl">Explore the beauty and wonder of nature at our conservation area.</p> 
      </div>
    </div>
  );
};

export default Homepage;