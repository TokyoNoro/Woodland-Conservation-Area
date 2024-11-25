/** This component displays an image with POIs mapped to it.
 * 
 * Authors: Cole, Marko
 */ 

import React, {useState } from 'react';
import { MapContainer, ImageOverlay, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import rewildingBirch from '../assets/rewildingBirch222.jpg';
import trailHead from '../assets/hiking.png';
import farm from '../assets/farm.png';
import well from '../assets/water-well.png';
import sitting from '../assets/sitting.png';
import birch from '../assets/birch.png';

const SiteMap = () => {
  // Bounds for the image (273px x 324px)
  const bounds = [
    [0, 0],
    [546, 648],
  ];

// icons
const trailIcon = L.icon({
  iconUrl: trailHead,
  iconSize: [32, 32], 
  iconAnchor: [0, 0], 
  popupAnchor: [0, 0], 
});

const farmIcon = L.icon({
  iconUrl: farm,
  iconSize: [32, 32], 
  iconAnchor: [0, 0], 
  popupAnchor: [0, 0], 
});

const wellIcon = L.icon({
  iconUrl: well,
  iconSize: [32, 32], 
  iconAnchor: [0, 0], 
  popupAnchor: [0, 0], 
});

const sittingIcon = L.icon({
  iconUrl: sitting,
  iconSize: [32, 32], 
  iconAnchor: [0, 0], 
  popupAnchor: [0, 0], 
});

const birchIcon = L.icon({
  iconUrl: birch,
  iconSize: [32, 32], 
  iconAnchor: [0, 0], 
  popupAnchor: [0, 0], 
});

// pointsOfinterest array
const pointsOfInterest = [
  { id: 1, name: 'Trailhead', position: [540, 40], direction: 'bottom', offset: [20, 60], icon:trailIcon},
  { id: 2, name: 'Trailhead', position: [460, 35], direction: 'bottom', offset: [25, 10], icon:trailIcon },
  { id: 3, name: 'Farmhouse Foundation', position: [430, 200], direction: 'bottom', offset: [0, 0], icon:farmIcon},
  { id: 4, name: 'Well', position: [485, 40], direction: 'bottom', offset: [20, 10], icon:wellIcon  },
  { id: 5, name: 'Sitting Area', position: [360, 240], direction: 'bottom', offset: [0, 0], icon:sittingIcon  },
  { id: 6, name: 'Costal Yellow Birch', position: [235, 465], direction: 'bottom', offset: [0, 0], icon:birchIcon },
];

// region array
const regionLabels = [
  { id: 1, name: 'Re-wilding Area', position: [220, 35] },
  { id: 2, name: 'Yellow Birch Forest', position: [195, 380] },
];

// user location
const [userLocation, setUserLocation] = useState(null);

 // Function to get user's location
 const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Example conversion for image-based map
        const convertedX = (latitude * 2) + 200; // Example scaling
        const convertedY = (longitude * -2) + 50; // Example scaling

        setUserLocation([convertedX, convertedY]);
      },
      (error) => {
        console.error('Error fetching location:', error);
      }
    );
  } else {
    console.warn('Geolocation is not supported by this browser.');
  }
};

return (
  <div className="p-8 bg-lime-800 dark:bg-darkBlue text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl font-sans mb-4 text-white dark:text-gray-300">Woodland Conservation Area</h1>

    {/* Button to show location */}
    <button
        onClick={getUserLocation}
        className="mb-4 px-4 py-2 bg-orange-900 text-white rounded hover:bg-orange-800"
    >YOU ARE HERE</button>

    <MapContainer
      bounds={bounds}
      style={{ height: '540px', width: '100%', maxWidth: '630px' }}
      crs={L.CRS.Simple}
      zoomControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      dragging={false}
    >
      <ImageOverlay url={rewildingBirch} bounds={bounds} />

      {/* Points of Interest Markers */}
      {pointsOfInterest.map((poi) => (
        <Marker
          key={poi.id}
          position={poi.position}
          icon={poi.icon}
        >
          <Popup autoPan={false} direction={poi.direction} offset={poi.offset}>
            <strong>{poi.name}</strong>
          </Popup>
        </Marker>
      ))}

      {/* Region Labels */}
      {regionLabels.map((region) => (
        <Marker
          key={region.id}
          position={region.position}
          icon={L.divIcon({
            className: 'text-white text-xl whitespace-nowrap font-extralight', 
            html: `<div>${region.name}</div>`,
          })}
          interactive={false} 
        />
      ))}

      {/* User Location Marker */}
      {userLocation && (
        <Marker
          position={userLocation}
          icon={L.divIcon({ className: 'bg-red-600 p-2 rounded-full text-white', html: '🧍' })}
        >
          {console.log("coords: " + userLocation)}
          <Popup>
            <strong>Your Location</strong>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  </div>
  );
};

export default SiteMap;
