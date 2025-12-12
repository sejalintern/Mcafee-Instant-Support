import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const DisclosureBanner: React.FC = () => {
  const { disclosure } = useAppContext();

  return (
    <div className="bg-yellow-50 text-yellow-800 p-4 text-center text-sm md:text-base italic shadow-inner">
      <p className="max-w-4xl mx-auto">"{disclosure}"</p>
    </div>
  );
};

export default DisclosureBanner;
