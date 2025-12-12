import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navLinks, phoneNumber, phoneNumberClean } = useAppContext();

  const activeLinkClasses = 'font-bold text-white';
  const defaultLinkClasses = 'text-white hover:text-gray-300 transition-colors duration-200';

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 shadow-md sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <RouterNavLink to="/" className="flex items-center space-x-2">
          <img src="https://www.mcafee.com/favicon.ico" alt="McAfee Icon" className="h-8 w-8" />
          <span className="text-xl md:text-2xl font-extrabold text-white">
            Independent McAfee Support
          </span>
        </RouterNavLink>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white p-2 rounded-md"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${isActive ? activeLinkClasses : defaultLinkClasses} text-lg`
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
          <a
            href={`tel:${phoneNumberClean}`}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out shadow-lg transform hover:scale-105 ml-4"
          >
            Call Now: {phoneNumber}
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 py-4 px-4 mt-4 rounded-b-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : defaultLinkClasses} text-lg block py-2 px-3 rounded-md`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
            <a
              href={`tel:${phoneNumberClean}`}
              onClick={() => setIsMenuOpen(false)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full text-center mt-3 shadow-lg"
            >
              Call Now: {phoneNumber}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
