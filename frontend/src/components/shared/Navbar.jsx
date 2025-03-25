import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 lg:px-12 transition-all duration-300 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r text-orange-600 bg-clip-text hover:opacity-80 transition-opacity duration-300"
        >
          Rentify
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-800 hover:text-[#E63946] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { path: "/", name: "Home", id: "home" },
            { path: "/rentals", name: "Listings", id: "rentals" },
            { path: "/dashboard", name: "Dashboard", id: "dashboard" },
          ].map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`relative px-4 py-2 text-gray-700 hover:text-[#E63946] transition-all duration-300 group ${
                activeLink === link.id ? "text-[#E63946] font-medium" : ""
              }`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#E63946] transition-all duration-300 ${
                  activeLink === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/login"
            className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-700 hover:text-[#ea580c] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FaUserCircle className="text-xl" />
            <span>Sign In</span>
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-6">
            <div className="flex flex-col space-y-4">
              {[
                { path: "/", name: "Home", id: "home" },
                { path: "/rentals", name: "Listings", id: "rentals" },
                { path: "/dashboard", name: "Dashboard", id: "dashboard" },
              ].map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg ${
                    activeLink === link.id
                      ? "bg-[#ea580c] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } transition-colors duration-300`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t pt-4 mt-2">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 mb-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center px-4 py-3 rounded-lg bg-orange-700 hover:bg-[#FF6B6B] text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
