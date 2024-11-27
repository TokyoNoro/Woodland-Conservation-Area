//Author: Marko Ostrovitsa (A00448932)
//Purpose: The purpose of this file is to display the about section of the website

import React, { useRef, useState } from 'react';
import outlookImage from '../assets/outlook.jpg'; // Make sure to replace with your actual image path
import { IoVolumeHigh, IoVolumeOff } from 'react-icons/io5'; // Import icons for the button

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const speechSynthesisRef = useRef(null);
  const textRef = useRef("");

  const handleTextToSpeech = () => {
    if (speechSynthesisRef.current && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (speechSynthesisRef.current && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      textRef.current = `
        About St. Margaret’s Bay Area Woodland Conservation Site. 
        Nestled in the heart of Halifax, Nova Scotia, the St. Margaret’s Bay Area Woodland Conservation Site is a sanctuary of natural beauty and biodiversity. 
        Spanning an impressive 200 acres, this conservation area is a verdant tapestry of towering trees, lush undergrowth, and vibrant wildlife.
        The woodland is home to a diverse range of flora and fauna, including the majestic Red Maple, the delicate Wild Carrot, and the robust Coltsfoot. 
        The Sheep Laurel and Multiflora Rose add a splash of color to the landscape, while the Star-nose Mole and the Little Brown Bat represent some of the unique wildlife species that inhabit the area.
        The St. Margaret’s Bay Area Woodland Conservation Site is not just a haven for wildlife, but also a living testament to our natural heritage. 
        It is a place where the past meets the present, where the whispering winds carry stories of times long gone, and where every leaf and stone is a piece of history waiting to be discovered.
        MISSION STATEMENT: 
        Our mission is to preserve and enhance the ecological integrity of the St. Margaret’s Bay Area Woodland Conservation Site. 
        We are committed to protecting its diverse habitats, promoting sustainable use, and fostering an appreciation for our natural heritage through education and community engagement.
        VISION: 
        We envision the St. Margaret’s Bay Area Woodland Conservation Site as a thriving ecosystem, teeming with life and serving as a model for conservation efforts. 
        We strive to create a space where nature can flourish, where future generations can experience the wonder of the woodland, and where the legacy of our natural heritage is safeguarded for years to come.
      `;

      const utterance = new SpeechSynthesisUtterance(textRef.current);
      const voices = speechSynthesis.getVoices();
      utterance.voice = voices.find(voice => voice.name.includes('Female')) || voices.find(voice => voice.gender === 'female');
      utterance.rate = 0.9; // Slowing down the speech rate for a softer effect
      utterance.pitch = 1.4; // Lowering the pitch for a softer voice

      speechSynthesisRef.current = utterance;
      window.speechSynthesis.speak(utterance);

      utterance.onend = () => {
        speechSynthesisRef.current = null;
        setIsPaused(false);
      };
    }
  };

  return (
    <div className="p-8 bg-white dark:bg-darkerBlue text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center">
      <div className="flex items-center justify-center w-full">
        <h1 className="text-5xl font-bold mb-4 text-center flex-1">About St. Margaret’s Bay Area Woodland Conservation Site</h1>
        <button 
          onClick={handleTextToSpeech} 
          className="ml-4 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-5 focus:outline-none"
        >
          {speechSynthesisRef.current && !isPaused ? <IoVolumeOff className="text-3xl" /> : <IoVolumeHigh className="text-3xl" />}
        </button>
      </div>
      <p className="mb-4 text-2xl text-center">
        Nestled in the heart of Halifax, Nova Scotia, the St. Margaret’s Bay Area Woodland Conservation Site is a sanctuary of natural beauty and biodiversity. Spanning an impressive 200 acres, this conservation area is a verdant tapestry of towering trees, lush undergrowth, and vibrant wildlife.
      </p>
      <p className="mb-4 text-2xl text-center">
        The woodland is home to a diverse range of flora and fauna, including the majestic Red Maple, the delicate Wild Carrot, and the robust Coltsfoot. The Sheep Laurel and Multiflora Rose add a splash of color to the landscape, while the Star-nose Mole and the Little Brown Bat represent some of the unique wildlife species that inhabit the area.
      </p>
      <p className="mb-4 text-2xl text-center">
        The St. Margaret’s Bay Area Woodland Conservation Site is not just a haven for wildlife, but also a living testament to our natural heritage. It is a place where the past meets the present, where the whispering winds carry stories of times long gone, and where every leaf and stone is a piece of history waiting to be discovered.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-2 text-left">MISSION STATEMENT</h2>
          <p className="mb-4 text-2xl text-left">
            Our mission is to preserve and enhance the ecological integrity of the St. Margaret’s Bay Area Woodland Conservation Site. We are committed to protecting its diverse habitats, promoting sustainable use, and fostering an appreciation for our natural heritage through education and community engagement.
          </p>
          <h2 className="text-4xl font-bold mb-2 text-left">VISION</h2>
          <p className="text-2xl text-left">
            We envision the St. Margaret’s Bay Area Woodland Conservation Site as a thriving ecosystem, teeming with life and serving as a model for conservation efforts. We strive to create a space where nature can flourish, where future generations can experience the wonder of the woodland, and where the legacy of our natural heritage is safeguarded for years to come.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={outlookImage} alt="Outlook" className="w-full h-auto max-w-2xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
