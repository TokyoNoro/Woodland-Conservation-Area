// Authors: Cole Turner (A00469026), 
// Purpose: This file represents the site map component. 

import React, { useState } from "react";

const SiteMap = () => {
  const [location, setLocation] = useState("44.6488,-63.5752"); // Default to Halifax, NS
  const [searchInput, setSearchInput] = useState("");
  const [mapType, setMapType] = useState("roadmap");
  const [error, setError] = useState(null); // For handling errors in geolocation or address lookup

  // Google Maps Embed API Key from environment variable
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Google Maps Embed API URL
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${location}&zoom=14&maptype=${mapType}`;

  // Handle search input
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  // Update location based on user input
  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      setLocation(searchInput.trim());
      setError(null);
    } else {
      setError("Please enter a valid location.");
    }
  };

  // Fetch user's current location
  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude},${longitude}`);
          setError(null);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setError("Unable to fetch your current location. Please allow location access.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  // Update map type
  const handleMapTypeChange = (type) => {
    setMapType(type);
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-darkBlue text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-200">Site Map</h1>

      {/* Search Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
          <input
            type="text"
            placeholder="Enter a location (latitude,longitude or address)"
            value={searchInput}
            onChange={handleSearchInput}
            className="p-3 w-full sm:w-auto border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-green-400"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-3 bg-green-500 text-white rounded-r-md hover:bg-green-600 transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Map Type Selector */}
        <div className="flex space-x-4">
          {["roadmap", "satellite", "terrain"].map((type) => (
            <button
              key={type}
              onClick={() => handleMapTypeChange(type)}
              className={`px-4 py-2 rounded-md ${
                mapType === type ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Current Location Button */}
      <div className="mb-6">
        <button
          onClick={handleGetCurrentLocation}
          className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 shadow-md"
        >
          Use My Current Location
        </button>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Map Display */}
      <div className="relative mb-8">
        <iframe
          title="Google Map"
          src={googleMapsUrl}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Instructions */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">How to Use This Map:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Use the search bar above to enter a location (e.g., "44.6488,-63.5752" or "Halifax, NS").</li>
          <li>Click "Use My Current Location" to display your real-time location on the map.</li>
          <li>Switch between different map views (Roadmap, Satellite, or Terrain) using the buttons above.</li>
          <li>Zoom in/out using the controls on the map.</li>
        </ul>
      </div>
    </div>
  );
};

export default SiteMap;
