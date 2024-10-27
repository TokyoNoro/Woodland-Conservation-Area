import React from 'react';
import background from '../assets/forest.jpg';

const Homepage = ({ dark }) => {
  return (
    <div
      className={`flex items-center justify-center min-h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center text-gray-900 dark:text-gray-100">
        <h1 className="text-6xl font-light mb-4">Welcome to Woodland Conservation Area</h1>
        <p className="text-2xl">Explore the beauty and wonder of nature at our conservation area.</p>
      </div>
    </div>
  );
};

export default Homepage;