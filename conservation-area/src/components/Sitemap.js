// Authors:
// Bhanu Prakash(A00468530) - Responsible for handling the 'Get Directions' functionality.
// Cole Turner (A00469026) - Responsible for map interction, UI design, TailWind CSS.
// Purpose: This file represents a site map component for the conservation area. 

import React, { useState } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import rewildingBirch from '../assets/rewildingBirch222.jpg';
import trailHead from '../assets/hiking.png';
import farm from '../assets/farm.png';
import well from '../assets/water-well.png';
import sitting from '../assets/sitting.png';
import birch from '../assets/birch.png';

const SiteMap = () => {
  // Default map bounds (size of the map)
  const bounds = [
    [0, 0],
    [546, 648],
  ];

  // State to store user's location (null initially)
  const [userLocation, setUserLocation] = useState(null);

  // Default user location coordinates (hardcoded)
  const defaultUserLocation = { lat: 44.623917, lng: -63.920472 };

  // List of Points of Interest (POI) with their locations and icons
  const pointsOfInterest = [
    { id: 1, name: 'Trailhead', position: [540, 40], icon: trailHead, offset: [45, 95], googlePosition: { lat: 44.625028, lng: -63.921417 } },
    { id: 2, name: 'Farmhouse Foundation', position: [430, 200], icon: farm, offset: [0,0], googlePosition: { lat: 44.625833, lng: -63.920972 } },
    { id: 3, name: 'Well', position: [485, 40], icon: well, offset: [50, 70], googlePosition: { lat: 44.624022, lng: -63.920028 } },
    { id: 4, name: 'Sitting Area', position: [360, 240], icon: sitting, offset: [0,0], googlePosition: { lat: 44.625028, lng: -63.920417 } },
    { id: 5, name: 'Coastal Yellow Birch', position: [235, 465], icon: birch, offset: [0,0], googlePosition: { lat: 44.624000, lng: -63.920056 } }
  ];

  // Function to handle "Get Directions" button click
  const handleGetDirectionsClick = (poi) => {
    const destination = poi.googlePosition; // Get the coordinates of the selected POI

    // Create a Google Maps URL with the origin (user's location) and the destination (POI's location)
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${defaultUserLocation.lat},${defaultUserLocation.lng}&destination=${destination.lat},${destination.lng}&travelmode=driving`;

    // Open Google Maps in a new tab
    window.open(googleMapsUrl, '_blank');
  };

  // Function to simulate user's location on the map when the button is clicked
  const handleUserLocation = () => {
    setUserLocation([250, 250]); // Set fixed coordinates or dynamically based on the actual user location
  };

  return (
    <div className="p-8 bg-lime-800 dark:bg-darkBlue text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-sans mb-4 text-white dark:text-gray-300">Woodland Conservation Area</h1>

      {/* Button to simulate the user's location on the map */}
      <button
        onClick={handleUserLocation}
        className="mb-4 px-4 py-2 bg-orange-900 text-white rounded hover:bg-orange-800"
      >
        YOU ARE HERE
      </button>

      <MapContainer
        bounds={bounds}
        style={{ height: '545px', width: '100%', maxWidth: '630px' }}
        crs={L.CRS.Simple}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        maxBounds={bounds}
      >
        {/* Image overlay for the map */}
        <ImageOverlay url={rewildingBirch} bounds={bounds} />

        {/* Render Points of Interest markers */}
        {pointsOfInterest.map((poi) => (
          <Marker key={poi.id} position={poi.position} icon={L.icon({ iconUrl: poi.icon, iconSize: [48, 48], iconAnchor: [24, 24], popupAnchor: [0, -10] })}>
            <Popup direction="bottom" autoPan={false} offset={poi.offset}>
              <strong>{poi.name}</strong>
              <br />
              {/* Button to get directions to the POI */}
              <button onClick={() => handleGetDirectionsClick(poi)} className="bg-blue-500 text-white px-2 py-1 rounded">Get Directions</button>
            </Popup>
          </Marker>
        ))}

        {/* User location marker (only visible when userLocation is set) */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.divIcon({ className: 'bg-red-600 p-2 rounded-full text-white', html: '🧍' })}
          >
            <Popup>
              <strong>Your Location</strong>
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Instructions Section */}
      <div className="mt-8 text-center text-white dark:text-gray-300">
        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <p>
          Click the "Get Directions" button on any marker to open Google Maps with directions to the selected point of interest.
        </p>
        <p className="mt-4">
          You can also click "YOU ARE HERE" to simulate your location on the map.
        </p>
      </div>
    </div>
  );
};

export default SiteMap;
