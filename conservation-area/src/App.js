import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; // Importing Navigation component
import Homepage from './components/Homepage'; // Importing Homepage component
import About from './components/About'; // Importing About component
import SiteMap from './components/Sitemap'; // Importing SiteMap component
import Contact from './components/Contact';

// App component definition
function App() {
  const [dark, setDark] = useState(false); // State to manage dark mode

  // Function to toggle dark mode
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    // Router component to handle navigation
    <Router>
      {/* Main container with dynamic background color based on dark mode */}
      <div className="bg-yellow-100 dark:bg-blue-900 min-h-screen">
        {/* Navigation component with dark mode toggle handler */}
        <Navigation toggleDarkMode={darkModeHandler} dark={dark} />
        {/* Routes component to handle different pages */}
        <Routes>
          <Route path="/" element={<Homepage dark={dark} />} /> {/* Route for Homepage component */}
          <Route path="/about" element={<About />} /> {/* Route for About component */}
          <Route path="/sitemap" element={<SiteMap />} /> {/* Route for SiteMap component */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // Exporting the App component as default
