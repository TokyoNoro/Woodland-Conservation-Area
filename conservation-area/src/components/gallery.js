import React, { useState } from 'react';

// Import images from the assets folder (replace with your actual paths)
import image1 from '../assets/download-1.jpg';
import image2 from '../assets/download-2.jpg';
import image3 from '../assets/download-3.jpg';

const Gallery = () => {
  const [images, setImages] = useState([image1, image2, image3]);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files; // Get the uploaded files
    const uploadedImages = Array.from(files).map((file) => {
      // Use FileReader to read the file as a data URL
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result); // Resolve with the image URL
      });
    });

    // Add the uploaded images to the state
    Promise.all(uploadedImages).then((newImages) => {
      setImages((prevImages) => [...prevImages, ...newImages]);
    });
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Gallery
      </h1>

      {/* Gallery Grid */}
      <div id="gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg flex justify-center items-center"
          >
            <img
              src={imgSrc}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-img"
              style={{
                maxWidth: '100%', // Ensure the image fits within the container width
                height: 'auto', // Maintain aspect ratio
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>

      {/* Add Image Section */}
      <div className="mt-6 text-center">
        <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Upload Image
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: 'none' }} // Hide the file input
          />
        </label>
      </div>
    </div>
  );
};

export default Gallery;
