import React, { useState } from 'react';
import { MapContainer, ImageOverlay, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import rewildingBirch from '../assets/rewildingBirch222.jpg';
import trailHead from '../assets/hiking.png';
import farm from '../assets/farm.png';
import well from '../assets/water-well.png';
import sitting from '../assets/sitting.png';
import birch from '../assets/birch.png';

// Icons
const createIcon = (iconUrl) =>
  L.icon({
    iconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

const SiteMap = () => {
  const bounds = [[0, 0], [546, 648]];

  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const convertedX = (latitude * 10) % 546; // Example scaling
          const convertedY = (longitude * 10) % 648; // Example scaling
          setUserLocation([convertedX, convertedY]);
        },
        (error) => console.error('Error fetching location:', error)
      );
    } else {
      alert('Geolocation not supported in this browser.');
    }
  };

  const pointsOfInterest = [
    { id: 1, name: 'Trailhead', position: [540, 40], icon: createIcon(trailHead) },
    { id: 2, name: 'Farmhouse Foundation', position: [430, 200], icon: createIcon(farm) },
    { id: 3, name: 'Well', position: [485, 40], icon: createIcon(well) },
    { id: 4, name: 'Sitting Area', position: [360, 240], icon: createIcon(sitting) },
    { id: 5, name: 'Coastal Yellow Birch', position: [235, 465], icon: createIcon(birch) },
  ];

  return (
    <div className="p-8 bg-lime-800 dark:bg-darkBlue text-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-sans mb-4">Woodland Conservation Area</h1>
      <button
        onClick={getUserLocation}
        className="mb-4 px-4 py-2 bg-orange-900 text-white rounded hover:bg-orange-800"
      >
        YOU ARE HERE
      </button>

      <MapContainer
        bounds={bounds}
        zoom={0}
        center={[273, 324]} // Fallback center
        style={{ height: '540px', width: '100%', maxWidth: '630px' }}
        crs={L.CRS.Simple}
      >
        <ImageOverlay url={rewildingBirch} bounds={bounds} />
        {pointsOfInterest.map((poi) => (
          <Marker key={poi.id} position={poi.position} icon={poi.icon}>
            <Popup>{poi.name}</Popup>
          </Marker>
        ))}
        {userLocation && (
          <Marker position={userLocation} icon={L.divIcon({ className: 'bg-red-600 text-white p-2 rounded-full', html: '🧍' })}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default SiteMap;
