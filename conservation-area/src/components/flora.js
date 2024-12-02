import React, { useState } from 'react';
import redMaple from '../assets/download-4.jpg';
import mole from '../assets/download-5.jpg';
import mushroom from '../assets/download-6.jpg';

// Sample data for Flora, Fauna, and Fungi
const data = [
  {
    name: 'Red Maple',
    category: 'Flora',
    description: 'A majestic tree known for its vibrant red leaves.',
    image: redMaple, 
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
];

const FloraFaunaFungi = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item in modal

  const closeModal = () => setSelectedItem(null); // Function to close the modal

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">
        Flora, Fauna, and Fungi
      </h1>

      {/* Categories Filter (Optional, can be enhanced with state) */}
      <div className="flex justify-center space-x-4 mb-6">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          Flora
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Fauna
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">
          Fungi
        </button>
      </div>

      {/* Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-xl font-bold text-white">{item.name}</h2>
              <p className="text-sm text-gray-300">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative max-w-lg w-full">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {selectedItem.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloraFaunaFungi;
