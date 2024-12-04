// Authors:
// Prupose: This file represents an about component.  

import React, { useRef, useState } from "react";
import outlookImage from "../assets/outlook.jpg"; // Replace with your actual image path
import { IoVolumeHigh, IoVolumeOff } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [accordionState, setAccordionState] = useState({
    floraFauna: false,
    heritageLegacy: false,
  });
  const [showMoreMission, setShowMoreMission] = useState(false);
  const speechSynthesisRef = useRef(null);
  const textRef = useRef("");

  // Handle text-to-speech
  const handleTextToSpeech = () => {
    if (speechSynthesisRef.current && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (speechSynthesisRef.current && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      textRef.current = `
        Welcome to the St. Margaret’s Bay Area Woodland Conservation Site.
        Situated in Halifax, Nova Scotia, this 200-acre natural haven is a vital ecosystem, home to diverse flora and fauna.
        It represents a commitment to preserving biodiversity and fostering a connection between people and nature.
        Our mission is to protect, sustain, and inspire, ensuring that the woodland thrives for future generations.
      `;
      const utterance = new SpeechSynthesisUtterance(textRef.current);
      speechSynthesisRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      utterance.onend = () => {
        speechSynthesisRef.current = null;
        setIsPaused(false);
      };
    }
  };

  // Toggle accordion state
  const toggleAccordion = (section) => {
    setAccordionState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="p-8 bg-white dark:bg-darkerBlue text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="flex items-center justify-center w-full mb-10">
        <h1 className="text-5xl font-bold text-center flex-1">
          About St. Margaret’s Bay Area Woodland Conservation Site
        </h1>
        <button
          onClick={handleTextToSpeech}
          className="ml-4 bg-yellow-400 text-gray-900 dark:bg-yellow-500 dark:text-gray-100 rounded-full p-5 focus:outline-none"
        >
          {speechSynthesisRef.current && !isPaused ? (
            <IoVolumeOff className="text-3xl" />
          ) : (
            <IoVolumeHigh className="text-3xl" />
          )}
        </button>
      </div>

      {/* Hero Image */}
      <div className="mb-10">
        <img
          src={outlookImage}
          alt="Woodland Outlook"
          className="w-full h-auto max-w-4xl rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-4xl mb-12">
        <div className="mb-4">
          <button
            className="flex justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 text-2xl font-semibold rounded-lg shadow-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => toggleAccordion("floraFauna")}
          >
            <span>Flora and Fauna</span>
            {accordionState.floraFauna ? (
              <AiOutlineMinus className="text-3xl" />
            ) : (
              <AiOutlinePlus className="text-3xl" />
            )}
          </button>
          {accordionState.floraFauna && (
            <div className="p-4 text-2xl bg-gray-50 dark:bg-gray-900 rounded-b-lg shadow-md">
              <ul className="list-disc list-inside">
                <li>
                  Flora: Red Maple, Wild Carrot, Coltsfoot, Sheep Laurel, and
                  Multiflora Rose.
                </li>
                <li>
                  Fauna: Star-nose Mole and the Little Brown Bat, among
                  others.
                </li>
              </ul>
              <p className="mt-4">
                Explore the unique diversity of life thriving in this woodland,
                creating a harmonious balance of nature.
              </p>
            </div>
          )}
        </div>
        <div className="mb-4">
          <button
            className="flex justify-between w-full p-4 bg-gray-100 dark:bg-gray-800 text-2xl font-semibold rounded-lg shadow-md focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => toggleAccordion("heritageLegacy")}
          >
            <span>Heritage and Legacy</span>
            {accordionState.heritageLegacy ? (
              <AiOutlineMinus className="text-3xl" />
            ) : (
              <AiOutlinePlus className="text-3xl" />
            )}
          </button>
          {accordionState.heritageLegacy && (
            <div className="p-4 text-2xl bg-gray-50 dark:bg-gray-900 rounded-b-lg shadow-md">
              <p>
                The woodland is a testament to the natural history of the
                region. Each tree and stone carries stories of the past, adding
                to the rich narrative of this thriving ecosystem.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Mission Section with "Learn More" Toggle */}
      <div className="w-full max-w-4xl text-left">
        <h2 className="text-4xl font-bold mb-4">Mission Statement</h2>
        <p className="text-2xl leading-relaxed">
          Our mission is to preserve and enhance the ecological integrity of
          this woodland site.
          {showMoreMission && (
            <span>
              {" "}
              We aim to protect habitats, promote sustainable practices, and
              foster a deep appreciation for our environment through education
              and community engagement.
            </span>
          )}
        </p>
        <button
          onClick={() => setShowMoreMission(!showMoreMission)}
          className="mt-2 text-lg text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
        >
          {showMoreMission ? "Show Less" : "Learn More"}
        </button>
      </div>

      {/* Vision Section */}
      <div className="w-full max-w-4xl mt-12">
        <h2 className="text-4xl font-bold mb-4">Vision</h2>
        <p className="text-2xl leading-relaxed">
          We envision a thriving ecosystem that serves as a beacon for
          conservation efforts, inspiring future generations to cherish and
          protect this natural treasure.
        </p>
      </div>
    </div>
  );
};

export default About;