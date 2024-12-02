import React from 'react';
import { IoVolumeHigh } from 'react-icons/io5'; // Importing volume icon

// Contact component definition
const Contact = ({ dark }) => {
  // Function to handle text-to-speech
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    // Select a female voice (you may need to change the index depending on the available voices)
    utterance.voice = voices.find(voice => voice.name.includes('Female')) || voices.find(voice => voice.gender === 'female');
    utterance.rate = 0.9; // Slowing down the speech rate for a softer effect
    utterance.pitch = 0.8; // Lowering the pitch for a softer voice
    speechSynthesis.speak(utterance); // Speak the text
  };

  return (
    <div className="p-8 bg-white text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center"> {/* Main container with white background */}
      <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1> {/* Page title */}
      <p className="text-2xl mb-8 text-center max-w-3xl"> {/* Introductory text */}
        Thank you for visiting our website. If you have any questions regarding the conservation area, please fill out this form, and we will get back to you as soon as possible.
      </p>
      <form className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg text-lg"> {/* Form container */}
        <div className="flex flex-wrap -mx-3 mb-16"> {/* Container for the name and phone number fields */}
          <div className="w-full md:w-1/2 px-3 mb-16 md:mb-0"> {/* Name field container */}
            <label className="block text-2xl font-bold mb-4" htmlFor="name"> {/* Name field label */}
              Name <span className="text-red-500">*</span> {/* Required field indicator */}
            </label>
            <div className="flex items-center"> {/* Container for the name input and speaker button */}
              <input
                className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xl"
                type="text"
                id="name"
                name="name"
              />
              <button 
                type="button" 
                onClick={() => speak('Please enter a name')}
                className="ml-4 text-4xl text-black dark:text-yellow-500"
              >
                <IoVolumeHigh />
              </button> {/* Text-to-speech button for the name field */}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3"> {/* Phone number field container */}
            <label className="block text-2xl font-bold mb-4" htmlFor="phone"> {/* Phone number field label */}
              Phone Number <span className="text-red-500">*</span> {/* Required field indicator */}
            </label>
            <div className="flex items-center"> {/* Container for the phone input and speaker button */}
              <input
                className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xl"
                type="text"
                id="phone"
                name="phone"
              />
              <button 
                type="button" 
                onClick={() => speak('Please enter a phone number')}
                className="ml-4 text-4xl text-black dark:text-yellow-500"
              >
                <IoVolumeHigh />
              </button> {/* Text-to-speech button for the phone field */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-16"> {/* Container for the email and subject fields */}
          <div className="w-full md:w-1/2 px-3 mb-16 md:mb-0"> {/* Email field container */}
            <label className="block text-2xl font-bold mb-4" htmlFor="email"> {/* Email field label */}
              Email <span className="text-red-500">*</span> {/* Required field indicator */}
            </label>
            <div className="flex items-center"> {/* Container for the email input and speaker button */}
              <input
                className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xl"
                type="email"
                id="email"
                name="email"
              />
              <button 
                type="button" 
                onClick={() => speak('Please enter an email')}
                className="ml-4 text-4xl text-black dark:text-yellow-500"
              >
                <IoVolumeHigh />
              </button> {/* Text-to-speech button for the email field */}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mt-6 md:mt-0"> {/* Subject field container */}
            <label className="block text-2xl font-bold mb-4" htmlFor="subject"> {/* Subject field label */}
              Subject <span className="text-red-500">*</span> {/* Required field indicator */}
            </label>
            <div className="flex items-center"> {/* Container for the subject input and speaker button */}
              <input
                className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xl"
                type="text"
                id="subject"
                name="subject"
              />
              <button 
                type="button" 
                onClick={() => speak('Please enter a subject')}
                className="ml-4 text-4xl text-black dark:text-yellow-500"
              >
                <IoVolumeHigh />
              </button> {/* Text-to-speech button for the subject field */}
            </div>
          </div>
        </div>
        <div className="mb-16 px-3"> {/* Container for the message field */}
          <label className="block text-2xl font-bold mb-4" htmlFor="message"> {/* Message field label */}
            Message <span className="text-red-500">*</span> {/* Required field indicator */}
          </label>
          <div className="flex items-center"> {/* Container for the message textarea and speaker button */}
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-xl"
              id="message"
              name="message"
              rows="5"
            ></textarea>
            <button 
              type="button" 
              onClick={() => speak('Please enter a message')}
              className="ml-4 text-4xl text-black dark:text-yellow-500"
            >
              <IoVolumeHigh />
            </button> {/* Text-to-speech button for the message field */}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-lg p-4 text-2xl w-full md:w-1/2"
            type="submit"
          >
            Send
          </button> {/* Submit button */}
        </div>
      </form>
    </div>
  );
};

export default Contact;
