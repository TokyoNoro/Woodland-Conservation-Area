import React, { useState } from 'react';

// Import images from the assets folder (replace with your actual paths)
import image1 from '../assets/download-1.jpg';
import image2 from '../assets/download-2.jpg';
import image3 from '../assets/download-3.jpg';

const Gallery = () => {
  const [images, setImages] = useState([
    { src: image1, name: 'Image 1' },
    { src: image2, name: 'Image 2' },
    { src: image3, name: 'Image 3' },
  ]);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const files = event.target.files; // Get the uploaded files
    const uploadedImages = Array.from(files).map((file) => {
      // Use FileReader to read the file as a data URL
      const reader = new FileReader();
      reader.readAsDataURL(file);

      return new Promise((resolve) => {
        reader.onload = () => resolve({ src: reader.result, name: file.name });
      });
    });

    // Add the uploaded images to the state
    Promise.all(uploadedImages).then((newImages) => {
      setImages((prevImages) => [...prevImages, ...newImages]);
    });
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
        Beautiful Forest Gallery
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
        Explore the beauty of forests and locations. You can also upload your favorite pictures to enhance this collection!
      </p>

      {/* Gallery Grid */}
      <div
        id="gallery"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay with name */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{img.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Drag-and-Drop Upload Section */}
      <div className="mt-10 text-center border-2 border-dashed border-gray-500 p-6 rounded-lg bg-gray-200 dark:bg-gray-800">
        <p className="text-gray-700 dark:text-gray-300">
          Drag and drop images here or click below to upload
        </p>
        <label className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Upload Images
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
  );
};

export default Gallery;
