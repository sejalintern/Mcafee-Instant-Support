import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { navLinks, socialLinks, phoneNumber, phoneNumberClean, disclosure } = useAppContext();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Company Info / Branding */}
        <div className="flex flex-col space-y-4">
          <NavLink to="/" className="flex items-center space-x-2 text-white text-2xl font-bold">
            <img src="https://www.mcafee.com/favicon.ico" alt="McAfee Icon" className="h-7 w-7" />
            <span>Independent McAfee Support</span>
          </NavLink>
          <p className="text-sm">
            Your trusted independent partner for McAfee Internet Security troubleshooting and support.
          </p>
          <div className="flex items-center space-x-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 1.485a1 1 0 01.178.647l-.68 4.293a1 1 0 00.252.923l2.844 2.844a1 1 0 00.923.252l4.293-.68a1 1 0 01.647.178l1.485.74A1 1 0 0118 15.847V18a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" />
            </svg>
            <a href={`tel:${phoneNumberClean}`} className="hover:underline">
              {phoneNumber}
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mandatory Disclosure and Copyright */}
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        <p className="mb-2 italic">"{disclosure}"</p>
        <p>&copy; {new Date().getFullYear()} Independent McAfee Support. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
