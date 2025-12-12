import React from 'react';
import { useAppContext } from '../contexts/AppContext';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ url, title }) => {
  const { socialLinks } = useAppContext();
  const currentUrl = url || window.location.href;
  const currentTitle = title || document.title;

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(currentTitle)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(currentTitle)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex space-x-3 items-center mt-4">
      <span className="text-gray-700 font-medium">Share:</span>
      <button
        onClick={shareOnFacebook}
        className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
        aria-label="Share on Facebook"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d={socialLinks.find(s => s.name === 'Facebook')?.icon} />
        </svg>
      </button>
      <button
        onClick={shareOnTwitter}
        className="text-blue-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
        aria-label="Share on Twitter"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d={socialLinks.find(s => s.name === 'Twitter')?.icon} />
        </svg>
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="text-blue-700 hover:text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
        aria-label="Share on LinkedIn"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d={socialLinks.find(s => s.name === 'LinkedIn')?.icon} />
        </svg>
      </button>
    </div>
  );
};

export default SocialShareButtons;
