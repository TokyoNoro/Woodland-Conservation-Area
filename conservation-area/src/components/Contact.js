// Author: Lakshay Bansal (A00467478)
// Purpose: To display the Contact section of the Woodland Conservation website.

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoVolumeHigh } from "react-icons/io5";

const Contact = () => {
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Select a soft female voice
    const selectedVoice = voices.find(voice => voice.name.includes("Female") && voice.lang === "en-US");
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    
    // Adjust pitch and rate for a softer tone
    utterance.pitch = 1.2; // Slightly higher pitch
    utterance.rate = 0.9; // Slightly slower rate

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      id="contact"
      className="p-8 bg-gradient-to-br from-green-300 to-green-500 dark:from-green-800 dark:to-green-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center"
    >
      {/* Section Title */}
      <h1 className="text-5xl font-bold mb-6 text-center">Get in Touch</h1>
      <p className="text-lg text-center mb-8 max-w-2xl">
        Have questions, feedback, or just want to say hello? We'd love to hear from you! Fill out the form below or connect with us through our social channels.
      </p>

      {/* Contact Form */}
      <div className="bg-white dark:bg-darkerBlue rounded-lg shadow-lg p-6 md:p-10 max-w-4xl w-full">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2 flex items-center">
                Name
                <button
                  onClick={() => speakText('Please enter a name')}
                  className="ml-2 text-gray-900 dark:text-gray-100 focus:outline-none"
                >
                  <IoVolumeHigh className="text-2xl" />
                </button>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2 flex items-center">
                Email
                <button
                  onClick={() => speakText('Please enter an email')}
                  className="ml-2 text-gray-900 dark:text-gray-100 focus:outline-none"
                >
                  <IoVolumeHigh className="text-2xl" />
                </button>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium mb-2 flex items-center">
              Message
              <button
                onClick={() => speakText('Please enter a message')}
                className="ml-2 text-gray-900 dark:text-gray-100 focus:outline-none"
              >
                <IoVolumeHigh className="text-2xl" />
              </button>
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-3 px-6 rounded-md transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-green-800 dark:text-green-400" />
            <p className="text-lg">+1 (123) 456-7890</p>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-green-800 dark:text-green-400" />
            <p className="text-lg">info@woodlandconservation.ca</p>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-green-800 dark:text-green-400" />
            <p className="text-lg">Halifax, Nova Scotia</p>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 dark:text-green-400 text-3xl hover:scale-110 transition-transform"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 dark:text-green-400 text-3xl hover:scale-110 transition-transform"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 dark:text-green-400 text-3xl hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
