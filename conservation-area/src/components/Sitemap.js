import React, { useState } from 'react';

const SiteMap = () => {
  const [location, setLocation] = useState('44.6488,-63.5752'); // Default to Halifax, NS

  const handleSearch = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
  };

  // Get the Google Maps API key from the environment variable
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Google Maps Embed API URL with API key
  const googleMapsUrl = `https://www.google.com/maps?q=${location}&hl=es;z=14&output=embed&key=${apiKey}`;

  return (
    <div className="p-8 bg-white dark:bg-darkBlue text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-sans mb-4 text-gray-700 dark:text-gray-300">Here is the site map</h1>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Enter a location (latitude,longitude)"
        onChange={handleSearch}
        className="mb-4 p-2 border rounded"
      />

      {/* Embed Google Maps using iframe */}
      <iframe
        title="Google Map"
        src={googleMapsUrl}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SiteMap;
