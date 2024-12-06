//Authors: Kunal Singla(A00461346), Cole Turner (A00469026)/Author: Bahnu Prakash (A00468530)
//Purpose: This file represents a componet to display a flora fauna fungi page.

import React, { useState } from 'react';
import redMaple from '../assets/download-4.jpg';
import mole from '../assets/download-5.jpg';
import mushroom from '../assets/download-6.jpg';
import birchImage from '../assets/download-7.jpg';
import chipmunk from '../assets/download-8.jpg';

// Sample data for Flora, Fauna, and Fungi
// Authors: Kunal Singla, Cole Turner
const data = [
  {
    name: 'Red Maple', // Name of the item
    category: 'Flora', // Category to classify the item (Flora, Fauna, Fungi)
    description: 'A majestic tree known for its vibrant red leaves.', // Description of the item
    image: redMaple, // Path to the image representing the item
  },
  {
    name: 'Star-nosed Mole',
    category: 'Fauna',
    description: 'An extraordinary mammal known for its unique star-shaped nose.',
    image: mole,
  },
  {
    name: 'Golden Oyster Mushroom',
    category: 'Fungi',
    description: 'A bright yellow mushroom often found on decaying wood.',
    image: mushroom,
  },
  {
    name: 'Birch Tree',
    category: 'Flora',
    description: 'A tree with striking white bark and vibrant leaves.',
    image: birchImage,
  },
  {
    name: 'Eastern Chipmunk',
    category: 'Fauna',
    description: 'A small mammal with stripes and an energetic personality.',
    image: chipmunk,
  },
];

const FloraFaunaFungi = () => {
  const [selectedItem, setSelectedItem] = useState(null); 
  // State to store the currently selected item for displaying in a modal. Initially null.

  const [filter, setFilter] = useState('All'); 
  // State to manage the current filter category (e.g., Flora, Fauna, Fungi). Defaults to 'All'.

  // Function to close the modal by resetting the selected item to null
  const closeModal = () => setSelectedItem(null);

  // Function to filter the data based on the current filter
  const filteredData = filter === 'All' ? data : data.filter((item) => item.category === filter);

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Main container with padding, background color, and full screen height */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
        Explore Flora, Fauna, and Fungi
        {/* Page title with responsive styling for light and dark modes */}
      </h1>

      {/* Categories Filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {['All', 'Flora', 'Fauna', 'Fungi'].map((category) => (
          <button
            key={category} 
            // Unique key for each button to ensure React can track them properly
            className={`px-4 py-2 rounded-lg font-bold ${
              filter === category
                ? 'bg-blue-600 text-white' 
                // Highlight the active filter button
                : 'bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300'
                // Default styles for inactive buttons with hover effects
            }`}
            onClick={() => setFilter(category)} 
            // Update the filter state when a button is clicked
          >
            {category}
            {/* Display the category name */}
          </button>
        ))}
      </div>

      {/* Interactive Grid for displaying items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <div
            key={index} 
            // Unique key for each grid item
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            // Styling for hover effects and responsiveness
            onClick={() => setSelectedItem(item)} 
            // Set the clicked item as the selected item
          >
            <img
              src={item.image} 
              // Source of the item's image
              alt={item.name} 
              // Alternative text for the image
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              // Image styling with hover zoom effect
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              {/* Overlay with a gradient background, visible on hover */}
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              {/* Display the item's name */}
              <p className="text-sm text-gray-300">{item.category}</p>
              {/* Display the item's category */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected item's details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Semi-transparent background for the modal */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative max-w-lg w-full">
            {/* Modal container with styling */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              // Close button with styling
              onClick={closeModal}
             
            >
              ✕
            </button>
            <img
              src={selectedItem.image} 
              // Image of the selected item
              alt={selectedItem.name} 
              // Alternative text for the image
              className="w-full h-64 object-cover rounded-lg mb-4"
              // Image styling inside the modal
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {selectedItem.name}
              {/* Display the selected item's name */}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{selectedItem.description}</p>
            {/* Display the selected item's description */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FloraFaunaFungi;
