import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`flex justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-32 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium ${
    theme === "dark" ? "bg-gray-900/70" : "bg-white/50"
  }`}>
      <div className="flex items-center space-x-2 cursor-pointer ">
        <img
          src={theme === "dark" ? Logo : Logo}
          className="w-10 sm:w-10"
          alt="Logo"
        />
        <h3 className={theme === "dark" ? "text-white" : "text-gray-800"}>
          Othuke
        </h3>
      </div>

      <div
        className={`flex items-center sm:text-sm ${
    theme === "dark" ? "text-gray-200" : "text-gray-700"
  } ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-50 max-sm:pl-1"}
    max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full 
    max-sm:flex-col ${
      theme === "dark"
        ? "max-sm:bg-gray-900 max-sm:text-gray-200"
        : "max-sm:bg-primary max-sm:text-white"
    } max-sm:pt-20 gap-5 transition-all`}
      >
        <FiX
          className="w-6 h-6 absolute right-4 top-6 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <Link
          to="/"
          onClick={() => setSidebarOpen(false)}
          className="text-base opacity-70 hover:opacity-100 md:opacity-100 transition py-2 lg:px-0 lg:py-0"
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={() => setSidebarOpen(false)}
          className="text-base opacity-70 hover:opacity-100 md:opacity-100 transition py-2 lg:px-0 lg:py-0"
        >
          About
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        {!sidebarOpen && (
          <FiMenu
            className={`w-6 h-6 sm:hidden cursor-pointer ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
            onClick={() => setSidebarOpen(true)}
          />
        )}

        <a
          href="#contact"
          className="group text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full transition-all"
        >
          Connect
          <span className="text-lg transform transition-transform group-hover:translate-x-1">
            ➔
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
