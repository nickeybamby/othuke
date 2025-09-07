import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  
   const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Update <html> class
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      {/* Root wrapper controls background + text */}
      <div
        className={`min-h-screen relative transition-colors duration-500 ease-in-out 
        ${theme === "dark" ? "bg-[#060619] text-gray-100" : "bg-white text-gray-900"}`}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
