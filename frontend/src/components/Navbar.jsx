import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-5">
      <div className="max-w-7xl mx-auto md:px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <div className="flex items-center flex-col">
              <span className="text-sm leading-none">
                Grandma's
              </span>
              <span className="text-sm leading-none">
                Bakery
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` montserrat font-medium ${isActive ? "text-black md:font-bold" : "text-gray-500 font-normal"
                } `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                ` montserrat font-medium ${isActive ? "text-black md:font-bold" : "text-gray-500 font-normal"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                ` montserrat font-medium ${isActive ? "text-black md:font-bold" : "text-gray-500 font-normal"
                }`
              }
            >
              Menu
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` montserrat font-medium ${isActive ? "text-black md:font-bold" : "text-gray-500 font-normal"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 montserrat ${isActive ? "text-black font-bold" : "text-gray-500 font-normal"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-4 py-2 montserrat ${isActive ? "text-black font-bold" : "text-gray-500 font-normal"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `block px-4 py-2 montserrat ${isActive ? "text-black font-bold" : "text-gray-500 font-normal"
              }`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block px-4 py-2 montserrat ${isActive ? "text-black font-bold" : "text-gray-500 font-normal"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
