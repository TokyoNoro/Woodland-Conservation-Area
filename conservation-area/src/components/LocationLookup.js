// Author: Bhanu Prakash (A00468530)
// Purpose: To use the api, but not able to figure out the distance calaculations.

import React, { useState } from 'react';

const SiteMap = () => {
  const [location, setLocation] = useState('44.6488,-63.5752'); // Default to Halifax, NS
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async (event) => {
    const address = event.target.value;
    setAddress(address);

    if (address.length > 5) {
      try {
        // Make a request to the Google Geocoding API to convert the address into coordinates
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`);
        const data = await response.json();

        if (data.status === 'OK') {
          // If the geocoding is successful, update the location with the coordinates
          const { lat, lng } = data.results[0].geometry.location;
          setLocation(`${lat},${lng}`);
          setError(null);
        } else {
          setError('Location not found');
        }
      } catch (error) {
        setError('Error fetching location');
      }
    }
  };

  // Google Maps Embed API URL
  const googleMapsUrl = `https://www.google.com/maps?q=${location}&hl=es;z=14&output=embed`;

  return (
    <div className="p-8 bg-white dark:bg-darkBlue text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-sans mb-4 text-gray-700 dark:text-gray-300">Here is the site map</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Enter a location (address)"
        onChange={handleSearch}
        value={address}
        className="mb-4 p-2 border rounded"
      />
      
      {/* Display error message if geocoding fails */}
      {error && <p className="text-red-500">{error}</p>}

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
