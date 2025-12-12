import React from 'react';
import Button from './Button';
import { useAppContext } from '../contexts/AppContext';

const CallToActionSticky: React.FC = () => {
  const { phoneNumber, phoneNumberClean } = useAppContext();

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-blue-700 p-3 shadow-lg z-40">
      <Button
        to={`tel:${phoneNumberClean}`}
        isCallToAction={true}
        className="w-full text-lg animate-pulse"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
        </svg>
        Call Now: {phoneNumber}
      </Button>
    </div>
  );
};

export default CallToActionSticky;
