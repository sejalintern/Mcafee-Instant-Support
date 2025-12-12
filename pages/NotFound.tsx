import React from 'react';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { useAppContext } from '../contexts/AppContext';

const NotFound: React.FC = () => {
  const { phoneNumber } = useAppContext();

  return (
    <>
      <SEO
        title={`Page Not Found | McAfee Support | Call ${phoneNumber}`}
        description="The page you requested could not be found. Please check the URL or navigate back to the home page."
        url="/404"
      />
      <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-100 text-gray-800 p-4">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</p>
        <p className="text-lg text-center max-w-md mb-8">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <NavLink
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Go to Homepage
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
