import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import About from './components/About';
import SiteMap from './components/SiteMap';

function App() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <Router>
      <div className="bg-yellow-100 dark:bg-blue-900 min-h-screen">
        <Navigation toggleDarkMode={darkModeHandler} dark={dark} />
        <Routes>
          <Route path="/" element={<Homepage dark={dark} />} />
          <Route path="/about" element={<About />} />
          <Route path="/sitemap" element={<SiteMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;